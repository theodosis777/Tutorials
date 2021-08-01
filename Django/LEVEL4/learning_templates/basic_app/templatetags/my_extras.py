from django import template

register = template.Library()


@register.filter(name='cut')
def cut(value, arg):
    """
    This curts out all values of arg from string
    """
    return value.replace(arg, '')


#register.filter('cut', cut)
