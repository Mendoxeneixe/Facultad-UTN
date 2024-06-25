"""
    Ejercicio 6: Ingresar "N" enteros, visualizar la suma de los numeros 
    pares de la listaa, cuantos numeros pares existen y cual es el 
    promedio de los numeros impares
"""

i = 0 
suma_pares = 0 
sumas_impares = 0
conteo_pares = 0
conteo_impares = 0
n_elementos = int(input(f"{i+1}. Digite la cantidad de elementos a ingresar: "))


while i< n_elementos:
    num = int(input(f"{i+1}. Digite un numero: "))
    if num % 2 == 0:
        suma_pares += num
        conteo_pares += 1
    else:
        suma_pares +=num
        conteo_impares+= 1
    i+= 1
    
if conteo_pares == 0:
    print("No se han digitado numeros pares.")
else:
    print(f"La suma de los numeros pares es {suma_pares}")
    print(f"El conteo de los numeros pares es {conteo_pares}")
    
if conteo_impares == 0:
    print("No se han digitado numeros impares.")
else:
    promedio_impares = sumas_impares / conteo_impares
    print(f"La suma  de los numeros impares es {sumas_impares}")
    print(f"El conteo de los numeros impares es {conteo_impares}")
    print(
        f"El promedio de los numeros impares es {promedio_impares:.2f}" #Equivalente a un .toFixed(2) en JS
    )
    
    