calificacion = input("¿Como  estuvo tu dia (1-10)? ")
try:
    califiacion = int(calificacion)
    if 1 <= calificacion <= 10:
        print(f"Tu dia estuvo de: {calificacion}")
    else:
        print("Por facor ingresa un numero entre 1 y 10.")
except ValueError:
    print("Por favor, ingesa un numero valido.")


if califiacion == 10:
    print("Que bueno tuviste un dia excelente!")
elif califiacion >= 7:
    print("Parece que tuviste un buen dia.")
elif califiacion >= 4:
    print("Tu dia estuvo regular.")
else:
    print("Lamento que tu dia no haya sido tan bueno.")
