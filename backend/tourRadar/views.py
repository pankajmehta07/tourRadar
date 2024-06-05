from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User
from tourRadar.models import Profile
# Create your views here.
def index(request):
    return render(request, "application.html",{"Hello":"hi"})

def signUP(request):
    fname = request.POST.get('fname')
    lname = request.POST.get('lname')
    email = request.POST.get('email','')
    phone = request.POST.get('phone','')
    gender = request.POST.get('gender','')
    type = request.POST.get('type','tourist')
    country = request.POST.get('country','')
    pp = request.FILES['profile']
    cp = request.FILES['cover']
    user = User(first_name=fname,last_name=lname, email=email)
    user.save()
    id = user.id 
    username = fname+lname+str(id)
    user.username = username
    user.save()
    profile = Profile(user_id = id,gender = gender, phone = phone,profilePic = pp, coverPic=cp, type=type,country=country)
    profile.save()

    json = {"PP":"build/static/media/Atul.f792673820b76b3e25db.jpg","username": username}
    return JsonResponse(json)
