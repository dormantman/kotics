from rest_framework import serializers

from web.models import Image, Update


class ImageSerializer(serializers.Serializer):
    src = serializers.ImageField()

    class Meta:
        model = Image
        fields = (
            'src'
        )


class UpdateSerializer(serializers.Serializer):
    id = serializers.IntegerField()

    name = serializers.CharField(max_length=512)
    description = serializers.CharField(max_length=8192)

    release_date = serializers.DateField()

    logo = serializers.ImageField()
    wallpaper = serializers.ImageField()

    average_score = serializers.FloatField()
    count_score = serializers.IntegerField()

    screenshots = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Update
        fields = (
            'id',

            'name',
            'description',

            'release_date',

            'logo',
            'wallpaper',

            'average_score',
            'count_score',

            'screenshots',
        )
