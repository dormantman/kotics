import datetime
import locale
import os
import sys
import uuid
from io import BytesIO

from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db.models.fields.files import ImageFieldFile
from django.utils.deconstruct import deconstructible
from django.utils.safestring import mark_safe
from PIL import Image

locale.setlocale(locale.LC_ALL, "ru_RU.UTF-8")


@deconstructible
class RandomFileName(object):
    def __init__(self, *path):
        self.path = os.path.join(*path, "%s%s")

    def __call__(self, _, filename):
        # @note It's up to the validators to check if it's the correct file type in name or if one even exist.
        extension = os.path.splitext(filename)[1]
        return self.path % (uuid.uuid4(), extension)


def compress_image(uploaded_image, resize=None):
    image_temp = Image.open(uploaded_image)
    image_temp = image_temp.convert('RGB')

    if resize is not None:
        image_temp = image_temp.resize(resize, Image.ANTIALIAS)

    output_io_stream = BytesIO()
    image_temp.save(output_io_stream, format='png', quality=80, optimize=True, progressive=True)
    output_io_stream.seek(0)
    uploaded_image = InMemoryUploadedFile(
        output_io_stream,
        'OptimizedImageField',
        "%s.png" % uploaded_image.name.split('.')[0],
        'image/png',
        sys.getsizeof(output_io_stream),
        None
    )
    return uploaded_image


def preview_image(obj, field, max_height=512):
    ratio = getattr(obj, field).width / getattr(obj, field).height
    size = min(max_height, getattr(obj, field).height)
    return mark_safe('<img src="{url}" width={width} height={height} />'.format(
        url=getattr(obj, field).url,
        width=size * ratio,
        height=size,
    ))


def get_user_data(request):
    return {
        'is_anonymous': request.user.is_anonymous,
        'data': {
            'username': request.user.username,
            'first_name': request.user.first_name,
            'last_name': request.user.last_name,
            'email': request.user.email,
            'reg_date': request.user.date_joined.strftime('%d %B %Y'),
        } if not request.user.is_anonymous else None,
    }


def to_json_obj(obj):
    """
    Extended encoder function that helps to serialize dates and images
    """
    if isinstance(obj, datetime.date):
        try:
            return obj.strftime('%d %B %Y')
        except ValueError:
            return ''

    if isinstance(obj, ImageFieldFile):
        try:
            return obj.url
        except ValueError:
            return ''

    raise TypeError(repr(obj) + " is not JSON serializable")
