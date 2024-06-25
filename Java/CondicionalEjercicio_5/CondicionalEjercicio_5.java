/*
 * En un almacen se hace un 20 MOD de descuento a los clietes,
 * cuya compra supere los $10.¿Cual sera la cantidad que pagara una persona po su compra?
 */

package Java.CondicionalEjercicio_5;

import java.util.Scanner;
import java.text.MessageFormat;

public class CondicionalEjercicio_5 {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            System.out.println("Digite el monto de la compra: ");
            var compra = input.nextInt();
            double descuento;

            if (compra > 100){
                descuento = compra *  0.2;
            } else {
                descuento = 0;
            }
            var precioFinal = compra - descuento;
            System.out.println(MessageFormat.format("El precio a pagar es: {0}", precioFinal));
        }
    }
}
