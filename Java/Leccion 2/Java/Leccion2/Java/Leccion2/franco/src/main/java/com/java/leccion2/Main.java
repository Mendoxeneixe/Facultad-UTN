package com.java.leccion2;

import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
    System.out.println("Digite un numero del 1 al 4: ");
    var numero = Integer.parseInt((entrada.nextLine()));
    var numeroTexto = "Valor desconocido";
    switch (numero) {
        case 1:
            numeroTexto = "Numero uno";
            break;
        case 2:
            numeroTexto = "Numero dos";
            break;
        case 3:
            numeroTexto = "Numero tres";
            break;
        case 4:
            numeroTexto = "Numero cuatro";
            break;
        default:
            numeroTexto = "Numero no encontrado";
            break;
    }
    System.out.println("numeroTexto =  " + numeroTexto);
    }
}
    