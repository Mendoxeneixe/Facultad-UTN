edad = input("Por favor, ingresa tu edad: ")

try:
    edad = int(edad)

    if edad >= 18:
        print("Eres mayor de edad.")
    else:
        print("Eres menor de edad")

except ValueError:
    print("Por favor, ingresa un numero valido.")
