numero = input("Por favor,ingresa un numero: ")

try:
    numero = int(numero)

    if numero % 2 == 0:
        print(f"{numero} es par. ")
    else:
        print(f"{numero} es un impar. ")
except ValueError:

    print("Porfavor ingresa un numero valido.")
