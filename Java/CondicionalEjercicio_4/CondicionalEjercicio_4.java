// Determinar si un alumno aprueba o reprueba un curso, sabiendo que
// aprobara si su promedio de calificacones es mayor o igual a 80
// o repureba en caso contrario

package Java.CondicionalEjercicio_4;

import java.util.Scanner;

public class CondicionalEjercicio_4 {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int suma = 0;
            System.out.println("Programa para determinar la calificacion del usuario: ");
            for (var i = 0; i < 3; i++) {
                System.out.println("Digite la " + (i + 1) + "º calificacion");
                double nota = Double.parseDouble(input.nextLine());
                suma += nota;
            }

            var promedio = suma / 3;

            if (promedio >= 70) {
                System.out.println("La calificacion del alumno es:" + promedio + "%20. Esta Aprobado, promedio");
            } else {
                System.out.println("La calificacion del alumno es:" + promedio + "%. Esta Desaprobado, promedio");
            }
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
    }
}
