from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),

    path('game/', views.GameView.as_view(), name='game'),

    path('download/', views.DownloadView.as_view(), name='download'),

    path('profile/', views.ProfileView.as_view(), name='profile'),

    path('updates/', views.UpdatesView.as_view(), name='updates'),
    url(r'updates/(?P<pk>[\d]+)/$', views.UpdateView.as_view(), name='update'),

    path('news/', views.NewsView.as_view(), name='news'),
    url(r'news/(?P<pk>[\d]+)/$', views.NewsItemView.as_view(), name='news-item'),

    path('files/', views.FilesView.as_view(), name='files'),

    path('accounts/register/', views.RegisterFormView.as_view(), name='register'),
]

handler404 = views.handler404
