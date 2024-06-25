# Ejercicio 4: Suponga que se tiene en un conjunto dde califiaciones de n grupo de
# 10alumnos. realizar un algoritmo para calcualar la calificacion promedio y
# la calificacion mas baja de todo el grupo.

print(
    "Programapara calcular la calificacion promedio y  la calificacion mas baja de todo el grupo"
)

suma = 0
calificacion_baja = 99999

for i in range(10):
    calificacion = int(input(f"Ingrese la {i+1}º calificacion: "))
    suma += calificacion
    if calificacion < calificacion_baja:
        calificacion_baja = calificacion

califiacion_promedio = suma / 10
print("")
print(
    f"""
    La calificacion promedio es:{califiacion_promedio}
    La calificacion mas bja es: {calificacion_baja}
    """
)
