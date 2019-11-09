from django.contrib.auth.models import User
from django.db import models
from django.db.models import Avg, Sum
from image_optimizer.fields import OptimizedImageField

from web.helpers import compress_image, RandomFileName


class Score(models.Model):
    value = models.IntegerField('Значение оценки')

    user = models.ForeignKey(User, models.CASCADE)

    def save(self, *args, **kwargs):
        if self.value:
            self.value = min(max(0, self.value), 10)

        super(Score, self).save(*args, **kwargs)

    def __str__(self):
        return "%s | %s" % (self.user, self.value)

    class Meta:
        verbose_name = 'оценка'
        verbose_name_plural = 'оценки'
        ordering = ['value']


class Image(models.Model):
    src = OptimizedImageField('Image', upload_to=RandomFileName('uploads', 'images'), null=True, blank=True)

    def __str__(self):
        return self.src.name

    def save(self, *args, **kwargs):
        if not self.id:
            if self.src:
                self.src = compress_image(self.src)

        super(Image, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'изображение'
        verbose_name_plural = 'изображения'


class File(models.Model):
    id = models.AutoField(primary_key=True)

    name = models.CharField('Название файла', max_length=2048, default='', blank=True)
    url = models.CharField('Ссылка на файл', max_length=2048, default='', blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'файл'
        verbose_name_plural = 'файлы'


class Update(models.Model):
    id = models.AutoField(primary_key=True)

    name = models.CharField('Название обновления', max_length=512, default='Обновление', blank=True)
    description = models.TextField('Описание обновления', default='Описание', blank=True)

    release_date = models.DateField('Дата обновления', null=True, blank=True)

    logo = OptimizedImageField(
        'Логотип обновления',
        upload_to=RandomFileName('uploads', 'logos'), null=True, blank=True)
    wallpaper = OptimizedImageField(
        'Изображение для фона',
        upload_to=RandomFileName('uploads', 'wallpapers'), null=True, blank=True)

    score_list = models.ManyToManyField(Score, blank=True)
    screenshots = models.ManyToManyField(Image, blank=True)

    youtube = models.CharField('Ссылка на youtube видео (Video ID)', max_length=256, default='', blank=True)

    average_score = models.FloatField('Среднее значение оценок', default=0, blank=True)
    count_score = models.IntegerField('Количество оценок', default=0, blank=True)

    def calc_average_score(self):
        average = self.score_list.values('value').annotate(
            sum=Sum('value')
        ).aggregate(
            average=Avg('sum')
        )['average']
        return average if average is not None else 0

    def save(self, *args, **kwargs):
        if self.id is not None:
            self.average_score = self.calc_average_score()
            self.count_score = self.score_list.count()

            if self.logo:
                self.logo = compress_image(self.logo)

            if self.wallpaper:
                self.wallpaper = compress_image(self.wallpaper)

            if self.description:
                self.description = self.description.replace('\r', '').replace('\n', '<br/>')

        super(Update, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'обновление'
        verbose_name_plural = 'обновления'
        ordering = ['name']


class News(models.Model):
    id = models.AutoField(primary_key=True)

    title = models.CharField('Название новости', max_length=512, default='Новость', blank=True)
    description = models.TextField('Описание новости', default='Описание', blank=True)

    release_date = models.DateField('Дата новости', null=True, blank=True)

    screenshots = models.ManyToManyField(Image, blank=True)

    def save(self, *args, **kwargs):
        if self.id is not None:
            if self.description:
                self.description = self.description.replace('\r', '').replace('\n', '<br/>')

        super(News, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'новость'
        verbose_name_plural = 'новости'
        ordering = ['title']
