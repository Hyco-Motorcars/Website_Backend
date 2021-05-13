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
    all_vehicles = Vehicle.objects.all

    return render(request, "vehicle_sales.html", {'all_vehicles': all_vehicles})
