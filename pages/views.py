from django.shortcuts import render
from django.http import HttpResponse

from vehicles.models import Vehicle

# Create your views here.
def homepage_view(request, *args, **kwargs):
    obj = Vehicle.objects.get(id=7)

    context = {
        'object': obj,
    }

    return render(request, "index.html", context)
    #return HttpResponse('<h1>Hello World!</h1>')

def vehicle_sales_view(request, *args, **kwargs):
    vehicle_qs = Vehicle.objects.all()

    vehicle_make = request.GET.get('searchmake')
    vehicle_model = request.GET.get('searchmodel')
    vehicle_year = request.GET.get('searchyear')
    vehicle_exterior = request.GET.get('searchexterior')
    vehicle_interior = request.GET.get('searchinterior')
    vehicle_maxprice = request.GET.get('searchmaxprice')
    vehicle_minprice = request.GET.get('searchminprice')

    if vehicle_make != '' and vehicle_make is not None:
        vehicle_qs = vehicle_qs.filter(make__icontains=vehicle_make)

    context = {
        'all_vehicles' : vehicle_qs
    }

    return render(request, "vehicle_sales.html", context)

def about_view(request, *args, **kwargs):
    
    return render(request, "about.html", {})

def rentals_view(request, *args, **kwargs):
    
    return render(request, "rentals.html", {})

def storage_view(request, *args, **kwargs):
    
    return render(request, "storage.html", {})

def detailing_view(request, *args, **kwargs):
    
    return render(request, "detailing.html", {})
