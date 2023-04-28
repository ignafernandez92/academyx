//EJERCICIO 1
const piramide = n => {
    num = ""
    for (let i=1; i<=n; i++)
    { 
        num = num + i
        console.log(num) ;
    }
}
piramide(7);
 
// 2
const paises_mundial = ["Qatar" , "Alemania", "Dinamarca" ,	"Brasil" ,	"Belgica" ,	"Francia" ,	"Croacia" ,	"España" ,	"Serbia" ,	"Inglaterra" ,	"Suiza" ,	"Paises Bajos" ,	"Argentina" ,	"Iran" ,	"Corea del Sur" ,	"Japon" ,	"Arabia Saudita" ,	"Uruguay" ,	"Ecuador" ,	"Canadá" ,	"Ghana" ,	"Senegal" ,	"Portugal" ,	"Polonia" ,	"Tunez" ,	"Marruecos" ,	"Camerun" ,	"Estados Unidos" ,	"Mexico" ,	"Gales" ,	"Australia" ,	"Costa Rica" ]
const paises_ranking_fifa = ["Argentina" ,	"Francia" ,	"Brasil" ,	"Belgica" ,	"Inglaterra" ,	"Paises Bajos" ,	"Croacia" ,	"Italia" ,	"Portugal" ,	"España" ,	"Marruecos" ,	"Suiza" ,	"EEUU" ,	"Alemania" ,	"Mexico" ,	"Uruguay" ,	"Colombia" ,	"Senegal" ,	"Dinamarca" ,	"Japón" ,	"Perú" ,	"Suecia" ,	"Polonia" ,	"Iran" ,	"Serbia" ,	"Gales" ,	"Corea del Sur" ,	"Tunez" ,	"Australia" ,	"Ucrania" ,	"Chile" ,	"Austria"]

const paises_dos_rankings = paises_mundial.filter(element => paises_ranking_fifa.includes(element));
console.log("Paises del ranking fifa que clasificaron al mundial 2022:", paises_dos_rankings);

// 3)

class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio * cantidad;
      this.cantidad = cantidad;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
      this.montoTotal = 0;
    }
  
    agregarProducto(producto) {
        for (let i = 0; i < this.productos.length; i++) {
          if (this.productos[i].nombre === producto.nombre) {
            console.log(`Ya existe ${producto.nombre} con ${this.productos[i].cantidad} unidades`);
            return;
          }
        }
        this.productos.push(producto);
        this.montoTotal += producto.precio;
      }
    cantidadTotalUnidades() {
      let cantidadTotal = 0;
      for (let i = 0; i < this.productos.length; i++) {
        cantidadTotal += this.productos[i].cantidad;
      }
      console.log("Cantidad de unidades totales:", cantidadTotal)
      return cantidadTotal;
    }
  }
  
  const primer_carrito = new Carrito();
  const papas = new Producto("papas", 3.20, 1);
  const sandia = new Producto("sandia", 10.75, 2);
  primer_carrito.agregarProducto(papas);
  primer_carrito.agregarProducto(sandia);
  primer_carrito.agregarProducto(sandia);
  primer_carrito.agregarProducto(papas);
  for (let i = 0; i < primer_carrito.productos.length; i++) {
    console.log(primer_carrito.productos[i]);
  }
  console.log("Cantidad de productos:", primer_carrito.productos.length);
  console.log("Monto Total:", primer_carrito.montoTotal);
  primer_carrito.cantidadTotalUnidades();


