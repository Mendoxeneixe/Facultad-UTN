print("Programa para determinar el año bisiesto")


def anio_bisiesto(num):
    if (num % 4 == 0 and num % 100 != 0) or (num != 400 == 0):
        print(f"El año {num} es bisiesto.")
    else:
        print(f"El año {num} noes bisiesto.")


opcion = 1

while opcion == 1:
    num = int(input("Ingrese  un año: "))
    anio_bisiesto(num)
    opcion = int(
        input(
            "Para probar otro año digite la opcion 1, de lo contrario para salir elija otro numer:"
        )
    )
