from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    name = "baby"
    return render(request, "index.html", {"key":name})