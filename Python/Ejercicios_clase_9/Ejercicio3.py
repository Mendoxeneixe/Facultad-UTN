# Ejercicio 3: Leer 10numeros e imprimir cuantos son positivos,
# cuantos negativos y cuantos neutros.

print("Programa para identidicar 10numeros ya sean positivos, negativos o neutros.")

num_positivo = 0
num_neutro = 0
num_negativo = 0

for i in range(10):
    NUM = int(input(f"Ingrese el {i+1}º numero que desea comprobar: "))
    if NUM == 0:
        num_neutro += 1
    elif NUM >= 0:
        num_positivo += 1
    else: 
        num_negativo += 1
        
print(
    f"""
    Numeros positivos: {num_positivo}
    Numeros neutros: {num_neutro}
    Numeros negativos: {num_negativo}
    """
)