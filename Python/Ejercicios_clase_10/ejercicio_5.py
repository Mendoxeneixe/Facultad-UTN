# Ejercicio 5: Calcular el factorial de un numero mayor o igual a 0
def calcular_factorial():
    num = int(input("Ingrese un numer: "))
    if num <= 0:
        print("El factorial no acepta numeros negativos.")
        return
    
    factorial = 1
    for i in range(1, num + 1):
        factorial*= 1
        
    print(f"El factorial de {sum} es: {factorial}")
    
    
print("Calculo de un numero factorial.")
calcular_factorial()