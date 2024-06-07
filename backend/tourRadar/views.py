from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User
from tourRadar.models import Profile
from django.conf import settings
from django.contrib.auth import authenticate, login, logout
import os

# Create your views here.

def index(request):
    return render(request, "application.html")

def signUP(request):
    if request.method=="POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email','')
        phone = request.POST.get('phone','')
        gender = request.POST.get('gender','')
        languages = request.POST.get('languages','')
        type = request.POST.get('type','tourist')
        country = request.POST.get('country','')
        password = request.POST.get('password','')
        pp = request.FILES['profile']
        cp = request.FILES['cover']
        user = User(first_name=fname,last_name=lname, email=email)
        user.save()
        id = user.id 
        username = fname+lname+str(id)
        user.username = username
        user.set_password(password)
        user.save()
        profile = Profile(user_id = id,gender = gender, phone = phone,profilePic = pp, coverPic=cp, languages=languages, type=type,country=country)
        profile.save()
        json = {"status": "success"}
    else:
        json = {"status": "failure"}

    return JsonResponse(json)

def profileData(request):
    if request.user is not None:
        profile = Profile.objects.get(user_id = request.user.id)
        languages = []
        for x in profile.languages.split(','): languages.append(x.strip())
        json = {"status": "Success",
                "username":request.user.get_username(),
                "name":request.user.first_name+" "+request.user.last_name,
                "languages":languages,
                "gender":profile.gender,
                "email":request.user.email,
                "country":profile.country,
                "type":profile.type,
                "coverpic":os.path.join("media", profile.coverPic.name),
                "profilePic":os.path.join("media", profile.profilePic.name),
                "phone":profile.phone,
                }
    else:
        json = {"status": "Invalid Credentials"}
    
    return JsonResponse(json)


def Login(request):
    if request.method=="POST":
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        user = authenticate(username=phone, password=password)
        if user is not None:
            login(request,user)
            profile = Profile.objects.get(user_id = request.user.id)
            languages = []
            for x in profile.languages.split(','): languages.append(x.strip())
            json = {"status": "Login success",
                    "username":user.get_username(),
                    "name":request.user.first_name+" "+request.user.last_name,
                    "languages":languages,
                    "gender":profile.gender,
                    "email":request.user.email,
                    "country":profile.country,
                    "type":profile.type,
                    "coverpic":os.path.join("media", profile.coverPic.name),
                    "profilePic":os.path.join("media", profile.profilePic.name),
                    "phone":profile.phone,
                    }
        else:
            json = {"status": "Invalid Credentials"}

    else:
        json = {"status": "failure"}
    return JsonResponse(json)




def showImage(request, path):
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    
    if os.path.exists(file_path):
        with open(file_path, 'rb') as f:
            return HttpResponse(f.read(), content_type="image/jpeg")
