from django.urls import path, include
from rest_framework.routers import DefaultRouter
from backend.viewsets import UserViewSet, BookmarkViewSet, InterviewViewSet, QuestionViewSet, ReactionViewSet, ResponseViewSet, PostViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'bookmarks', BookmarkViewSet)
router.register(r'interviews', InterviewViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'reactions', ReactionViewSet)
router.register(r'responses', ResponseViewSet)
router.register(r'posts', PostViewSet, basename='post')

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
