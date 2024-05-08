from django.http import JsonResponse
import json
import logging
from django.conf import settings
import openai
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from backend.models import Interview, Response
from backend.serializers import InterviewSerializer

logger = logging.getLogger(__name__)

client = openai.Client(api_key=settings.OPENAI_API_KEY)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_interview_response(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    try:
        data = json.loads(request.body)
        user_response = data.get('response')
        profession = data.get('profession')

        if not profession or not user_response:
            logger.error("Missing required fields: Profession or user response")
            return JsonResponse({'error': 'Profession and user response are required'}, status=400)

        # Default question
        default_question = "Tell me about yourself."

        # Generate a commentary and a new question based on the user's response and profession
        prompt = f"Previously, user said: '{user_response}'. Acknowledge their statement, then transition to another question for their field {profession}."
        completion = client.completions.create(
            model="gpt-3.5-turbo-instruct",
            prompt=prompt,
            max_tokens=50
        )
        response_text = completion.choices[0].text.strip() if completion.choices[0].text else ""
        
        # Use OpenAI's response as the interview question if available, otherwise use the default question
        interview_question = response_text if response_text else default_question

        interview = Interview.objects.create(user=request.user, question_text=interview_question)
        response = Response.objects.create(interview=interview, text=user_response)

        return JsonResponse({'responseText': response_text})

    except Exception as e:
        logger.exception("An unexpected error occurred:") 
        return JsonResponse({'error': str(e)}, status=500)
