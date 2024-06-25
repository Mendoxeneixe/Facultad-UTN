package Java.CondicionalEjercicio_2;

import java.util.Scanner;

public class condicionalejercicio_2 {
    public static void main(String[] args) {
        try (Scanner entrada = new Scanner(System.in)) {
            System.out.println("Digite un mes del ano: ");
            var mes = Integer.parseInt(entrada.nextLine());
            var estacion = "Estacion desconocida.";
            switch (mes) {
                case 12:
                case 1:
                case 2:
                    estacion = "Usted se encuentra en verano.";
                    break;
                case 3:
                case 4:
                case 5:
                    estacion = "Usted se encuentra en otoño";
                    break;
                case 6:
                case 7:
                case 8:
                    estacion = "Usted se encuentra en invierno.";
                    break;
                case 9:
                case 10:
                case 11:
                    estacion = "Usted se encuentra en primavera.";
                    break;
                default:
                    break;
            }
            System.out.println(estacion);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
    }
}
