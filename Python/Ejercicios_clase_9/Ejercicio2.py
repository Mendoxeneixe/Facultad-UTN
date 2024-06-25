# Calcular la suma de "N" primeros numeros 

N = int(input("Digite la cantidad de numeros a sumarse: "))
suma = 0

for i in range(N):
    numero = int(input(f"Ingrese el numero {i+1}: "))
    suma += numero
    
print(f"La suma de los {N} numeros ingresados es {suma}")