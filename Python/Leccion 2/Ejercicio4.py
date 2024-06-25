# Ejercicio 4: Area y longitud de un circulo
# Hacerun programa para ingresa el radio de un circulo y se reporte su area
# la longitud de la cincurferencia

from math import pi


radio = float(input("Ingrese el radio del circulo: "))

area = pi* radio ** 2
longitud = 2 *pi ^* radio

print(f'''
      El area es: {area}
      La longitud es: {longitud}
      ''')