import json
import random

from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import get_object_or_404, render
from django.views import View
from django.views.generic import FormView

from web.helpers import get_user_data, to_json_obj
from web.models import File, News, Update

RID = int(random.random() * (10 ** 12))


def handler404(request, *args, **argv):
    return render(request, 'main/index.html', {
        'RID': RID,
        'pageTitle': '404 | Cryengine Gothic',
        'portalTitle': 'Kotics',
        'additional': json.dumps({
            'user': get_user_data(request)
        })
    }, status=404)


class IndexView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Kotics | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'user': get_user_data(request)
            })
        })


class GameView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Игра | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'user': get_user_data(request)
            })
        })


class DownloadView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Скачать | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'user': get_user_data(request)
            })
        })


class ProfileView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Профиль | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'user': get_user_data(request)
            })
        })


class UpdatesView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Обновления | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'results': [
                    {
                        'id': update.id,
                        'name': update.name,
                        'description': update.description,
                        'release_date': to_json_obj(update.release_date),
                        'logo': to_json_obj(update.logo),
                        'wallpaper': to_json_obj(update.wallpaper),
                        'average_score': update.average_score,
                        'count_score': update.count_score,
                        'screenshots': [to_json_obj(s) for s in update.screenshots.all()],
                        'youtube': update.youtube,
                    } for update in Update.objects.all()],
                'user': get_user_data(request)
            })
        })


class UpdateView(View):
    def get(self, request, pk=None):
        update = get_object_or_404(Update, id=pk)
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': '%s | Cryengine Gothic' % update.name,
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'update': {
                    'id': update.id,
                    'name': update.name,
                    'description': update.description,
                    'release_date': to_json_obj(update.release_date),
                    'logo': to_json_obj(update.logo),
                    'wallpaper': to_json_obj(update.wallpaper),
                    'average_score': update.average_score,
                    'count_score': update.count_score,
                    'screenshots': [to_json_obj(s) for s in update.screenshots.all()],
                    'youtube': update.youtube,
                },
                'user': get_user_data(request)
            })
        })


class NewsView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Новости | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'results': [
                    {
                        'id': item.id,
                        'title': item.title,
                        'description': item.description,
                        'release_date': to_json_obj(item.release_date),

                        'screenshots': [to_json_obj(s) for s in item.screenshots.all()],
                    } for item in News.objects.all()],
                'user': get_user_data(request)
            })
        })


class NewsItemView(View):
    def get(self, request, pk=None):
        item = get_object_or_404(News, id=pk)
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': '%s | Cryengine Gothic' % item.title,
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'news': {
                    'id': item.id,
                    'title': item.title,
                    'description': item.description,
                    'release_date': to_json_obj(item.release_date),

                    'screenshots': [to_json_obj(s) for s in item.screenshots.all()],
                },
                'user': get_user_data(request)
            })
        })


class FilesView(View):
    def get(self, request):
        return render(request, 'main/index.html', {
            'RID': RID,
            'pageTitle': 'Файлы | Cryengine Gothic',
            'portalTitle': 'Kotics',
            'additional': json.dumps({
                'results': [
                    {
                        'id': item.id,
                        'name': item.name,
                        'url': item.url,
                    } for item in File.objects.all()],
                'user': get_user_data(request)
            })
        })


class RegisterFormView(FormView):
    form_class = UserCreationForm

    # Ссылка, на которую будет перенаправляться пользователь в случае успешной регистрации.
    # В данном случае указана ссылка на страницу входа для зарегистрированных пользователей.
    success_url = "/accounts/login/"

    # Шаблон, который будет использоваться при отображении представления.
    template_name = "registration/registration_form.html"

    def form_valid(self, form):
        # Создаём пользователя, если данные в форму были введены корректно.
        form.save()

        # Вызываем метод базового класса
        return super(RegisterFormView, self).form_valid(form)

# class GameView(View):
#     def get(self, request, pk=None):
#         game = get_object_or_404(Game, id=pk)
#         serializer = GameSerializer(game)
#
#         return render(request, 'main/index.html', {
#             'RID': RID,
#             'pageTitle': f'{game.name} | Kotics',
#             'portalTitle': 'Kotics',
#             'additional': json.dumps({
#                 'game': serializer.data,
#                 'user': get_user_data(request)
#             })
#         })


# class GamesView(View):
#     def get(self, request):
#         games_type = 'Худшие' if request.GET.get('games') == 'worst' else 'Лучшие'
#         games_type_end = 'худших' if request.GET.get('games') == 'worst' else 'лучших'
#         platforms = request.GET.get('platforms')
#         genres = request.GET.get('genres')
#
#         platform = None
#         genre = None
#
#         try:
#             if platforms is not None and genres is not None:
#                 platform = PLATFORMS[platforms]['full']
#                 genre = GENRES[genres]['full']
#                 name = f'{games_type} игры {genre} на {platform} - популярные игры {genre} для {platform}'
#
#             elif platforms is not None:
#                 platform = PLATFORMS[platforms]['full']
#                 name = f'{games_type} игры на {platform} - популярные игры для {platform}'
#
#             elif genres is not None:
#                 genre = GENRES[genres]['full']
#                 name = f'{games_type} игры {genre} - популярные игры {genre}, список {games_type_end}'
#
#             else:
#                 name = f'{games_type} игры - самые популярные игры, список {games_type_end}'
#
#         except KeyError:
#             raise Http404()
#
#         return render(request, 'main/index.html', {
#             'RID': RID, 'is_auth': request.user.is_authenticated,
#             'pageTitle': f'{name} | Kotics',
#             'portalTitle': 'Kotics',
#             'additional': json.dumps({
#                 'games_type': games_type,
#                 'genre': genre,
#                 'platform': platform,
#                 'games_type_end': games_type_end,
#                 'user': get_user_data(request)
#             }),
#         })
#
#
# class GameAPI(APIView):
#     queryset = Game.objects.all()
#
#     def get(self, request, pk=None):
#         game = get_object_or_404(Game, id=pk)
#         serializer = GameSerializer(game)
#
#         return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# class GamesAPI(generics.ListAPIView):
#     serializer_class = GameSerializer
#     pagination_class = GamePagination
#     filter_backends = (DjangoFilterBackend,)
#
#     def get_queryset(self):
#         games_type = self.request.query_params.get('games', 'best')
#
#         if games_type == 'worst':
#             queryset = Game.objects.all().order_by('average_score', '-count_score')
#
#         else:
#             queryset = Game.objects.all().order_by('-average_score', '-count_score')
#
#         platforms = self.request.query_params.get('platforms')
#         genres = self.request.query_params.get('genres')
#
#         if platforms:
#             for platform in platforms.split(','):
#                 queryset = queryset.filter(platforms__short=platform)
#
#         if genres:
#             for genre in genres.split(','):
#                 queryset = queryset.filter(genres__short=genre)
#
#         return queryset
