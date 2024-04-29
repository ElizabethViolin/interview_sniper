from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from backend.models import Reaction, Post, ReactionType
from backend.serializers import ReactionSerializer

class ReactionViewSet(viewsets.ModelViewSet):
    queryset = Reaction.objects.all()
    serializer_class = ReactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['post'])
    def toggle(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        reaction_type = request.data.get('reaction_type', ReactionType.LIKE)
        
        try:
            reaction = Reaction.objects.get(user=request.user, post=post)
            if reaction.reaction_type == reaction_type:
                reaction.delete() 
                return Response({'status': 'reaction removed'}, status=status.HTTP_204_NO_CONTENT)
            else:
                reaction.reaction_type = reaction_type  
                reaction.save()
                return Response(self.get_serializer(reaction).data, status=status.HTTP_200_OK)
        except Reaction.DoesNotExist:
            reaction = Reaction.objects.create(user=request.user, post=post, reaction_type=reaction_type)
            return Response(self.get_serializer(reaction).data, status=status.HTTP_201_CREATED)
