from django.contrib import admin

class ArticleModel(admin.ModelAdmin):
    list_filter = ('title','description')
    list_display = ('title','description')
