
 /*alert("Young mates, los mejores mates !")
 

    function carritoDeCompra() {
        
    let total = 0 // carrito
    let compro_mate = false, compro_bombilla = false
    let mate = 2500
    let bombilla = 1000
    
    
    let compra = prompt(
    "Eleg� una opci�n: \n1- Agregar un mate. \n2- Anular un mate.   \n3 - Agregar una bombilla. \n4 - Anular una bombilla. \n5 - Total \nFinalizar compra"
    );
    while (compra != "Finalizar compra") {
        switch (compra) {
            case "1":                
                alert("compraste un mate $" + "" + mate);
               
                total = total + mate;
                compro_mate = true
                break;
            case "2":
                if (compro_mate === false)
                    break
                alert("anulaste un mate $" + "" + mate);                
                total = total - mate;

                break;
            case "3":                        
               alert("compraste una bombilla $" + "" + bombilla);
               
                total = total + bombilla;
                compro_bombilla = true     
                break;
            case "4":
                if (compro_bombilla === false)
                    break
                alert("anulaste una bombilla $" + "" + bombilla);
                total = total - bombilla;

                break;
            case "5":
                
                alert("El total de tu compra es $" + total);
                break; 
                
        }
        compra = prompt(
           "Eleg� una opci�n: \n1- Agregar un mate. \n2- Anular un mate.   \n3 - Agregar una bombilla. \n4 - Anular una bombilla. \n5 - Total \nFinalizar compra"
        );
        }
        */
        const productos = [
          { id: 1, articulo: "mate liso", precio: 8600 },
          { id: 2, articulo: "mate cincelado", precio: 8700 },
          { id: 3, articulo: "mate estandar", precio: 7800 },
          { id: 4, articulo: "mate max", precio: 7900 },
          { id: 5, articulo: "bombilla lisa", precio: 1850 },
          { id: 6, articulo: "bombilla cincelada", precio: 1950 },
        ]

        function producto(nombre, precio) {
          this.id = productos.length + 1;
          this.articulo = articulo;
          this.precio = precio;                      
        }

        function buscarPorNombre (filtro) {
          const producto = productos.find((el)=>
          el.articulo.includes (filtro) )
         return producto;
        }

        function filtrarPorPrecio(arr, filtro){
        const producto = arr.filter ((el)=>
         el.precio < filtro)
        return producto
       }
                 
        

        let buscar = prompt("Podes buscar por articulo o precio");
        let ingreso = prompt("nombre o precio de lo que estas buscando");

        function filtrar(arr, filtro, buscar) {
          return arr.filter((el) => {
            if (buscar === "id") {
             return el.id === filtro;
            }else if (buscar === "precio") {
            return el.precio <= filtro;
            }else{
            return el[buscar].includes(filtro);
          }
        });
        }

        

        console.log(filtrar(productos, ingreso, buscar));
    
        
    //}
    //carritoDeCompra();
    //alert("En 48 horas despacharemos tu pedido");



//alert('Gracias por tu compra')



/* Objetivos específicos

Se debe entregar


Funciones esenciales del proceso a simular.
Objetos de JS.
Arrays.
Métodos de búsqueda y filtrado sobre el Array.
*/

  // clase arrays 1.40 si me trabo

  // after 45-35  si me trabo
  