from django.http import JsonResponse
import json
import logging
from django.conf import settings
import openai  # Assuming openai is correctly imported and used
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

# Set up logging
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

        # Generate a commentary and a new question based on the user's response and profession
        prompt = (f"Previously, user said: '{user_response}'.\n"
                  f"Acknowledge their statement, then seamlessly transition to asking her another interview question for her field {profession}.")
        completion = client.completions.create(
            model="gpt-3.5-turbo-instruct",
            prompt=prompt,
            max_tokens=50
        )
        response_text = completion.choices[0].text.strip() if completion.choices[0].text else ""

        return JsonResponse({'responseText': response_text})

    except Exception as e:
        logger.exception("An unexpected error occurred:") 
        return JsonResponse({'error': str(e)}, status=500)
