from django.urls import path, include
from rest_framework import routers
from . import views
from login.views import TestView

app_name = 'login'


urlpatterns = [

    path('', views.LoginView.as_view(), name='login'),
    path('face/',views.FaceLoginView.as_view(),name ='face'),
    # path('usertest/',views.usertestvieW.as_view(),name='usertest'),
    #swagger
    # path('v1/test/', TestView.as_view(), name='test'),
    # path('', include(router.urls)),
    # path('', views.userform, name='userfrom'),
]