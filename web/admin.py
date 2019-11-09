from django.contrib import admin

from web.helpers import preview_image
from web.models import Image, News, Score, Update, File

admin.site.site_header = "Администрация Kotics"
admin.site.site_title = "Kotics Admin Portal"
admin.site.index_title = "Добро пожаловать на портал Kotics"


@admin.register(Update)
class UpdateAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'average_score',
        'count_score',
    )
    fieldsets = (
        (None, {
            'fields': (
                'id',
                'name',
                'description',
                'release_date',
                'logo',
                'preview_logo',
                'wallpaper',
                'preview_wallpaper',
                'score_list',
                'screenshots',
                'youtube',
            )
        }),
    )
    search_fields = (
        'name',
        'release_date',
    )
    list_filter = (
        'name',
    )
    readonly_fields = (
        'id',
        'preview_logo',
        'preview_wallpaper',
    )

    @staticmethod
    def preview_logo(obj):
        return preview_image(obj, 'logo')

    @staticmethod
    def preview_wallpaper(obj):
        return preview_image(obj, 'wallpaper')


@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': (
                'value',
                'user'
            )
        }),
    )
    search_fields = (
        'user',
    )
    readonly_fields = (

    )


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': (
                'src',
                'preview_image',
            )
        }),
    )
    search_fields = (
        'src',
    )
    readonly_fields = (
        'preview_image',
    )

    @staticmethod
    def preview_image(obj):
        return preview_image(obj, 'src')


@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': (
                'id',
                'name',
                'url',
            )
        }),
    )
    search_fields = (
        'name',
    )
    readonly_fields = (
        'id',
    )


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': (
                'id',
                'title',
                'description',
                'release_date',
            )
        }),
    )
    search_fields = (
        'title',
    )
    readonly_fields = (
        'id',
    )
