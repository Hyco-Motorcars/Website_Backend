from django.db import models

# Create your models here.
class Vehicle(models.Model):
    type           = models.CharField(max_length=120)
    year           = models.IntegerField()
    make           = models.CharField(max_length=120)
    model          = models.CharField(max_length=120)
    VIN            = models.CharField(max_length=120)
    purchase_price = models.DecimalField(decimal_places=2, max_digits=1000, blank=True, null=True)
    listing_price  = models.DecimalField(decimal_places=2, max_digits=1000, blank=True, null=True, default=50000)
    exterior_color = models.TextField(blank=True, null=True, default='Black')
    interior       = models.TextField(blank=True, null=True, default='Beige')
    num_doors      = models.IntegerField(blank=True, null=True, default=4)
    num_seats      = models.IntegerField(blank=True, null=True, default=5)
    engine         = models.CharField(max_length=120, blank=True, null=True, default='V8 Inline-Six')
    transmission   = models.CharField(max_length=120, blank=True, null=True, default='Manual')
    wheels         = models.CharField(max_length=120, blank=True, null=True, default='chrome wire')
    tires          = models.CharField(max_length=120, blank=True, null=True, default='Firestone')
    brakes         = models.CharField(max_length=120, blank=True, null=True, default= 'Disc')
    steering_wheel = models.CharField(max_length=120, blank=True, null=True, default='3-spoke')
    sunroof        = models.BooleanField(blank=True, null=True, default=False)
    convertible    = models.BooleanField(blank=True, null=True, default=False)
    speedometer    = models.IntegerField(blank=True, null=True, default=100)
    torque         = models.IntegerField(blank=True, null=True, default=250)
    horsepower     = models.IntegerField(blank=True, null=True, default=300)
    audio_system   = models.TextField(blank=True, null=True, default='Stock')
    cooling_system = models.BooleanField(blank=True, null=True, default=True)
    heating_system = models.BooleanField(blank=True, null=True, default=True)


