from django.urls import path, include
from rest_framework.routers import DefaultRouter
from backend.viewsets import UserViewSet, BookmarkViewSet, InterviewViewSet, QuestionViewSet, ReactionViewSet, ResponseViewSet, PostViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'bookmarks', BookmarkViewSet)
router.register(r'interviews', InterviewViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'reactions', ReactionViewSet)
router.register(r'responses', ResponseViewSet)
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
