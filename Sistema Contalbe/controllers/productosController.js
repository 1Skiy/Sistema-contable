const productos = [];
class ProductosController {
  mostrarProductos(req, res) {
    // Lógica para mostrar los productos
    res.render('mostrarProductos', { productos });
  }

  agregarProducto(req, res) {
    // Obtener los datos del producto del cuerpo de la solicitud
    const { nombre, precio, stock } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre || !precio || !stock) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Crear un nuevo objeto producto
    const nuevoProducto = {
      nombre,
      precio,
      stock
    };

    // Agregar el nuevo producto al array
    productos.push(nuevoProducto);

    // Redireccionar a la página de lista de productos
    res.redirect('/productos');
  }
  
  eliminarProducto(req, res) {
    const nombreProducto = req.params.nombre;
  
    // Buscar el índice del producto en el array de productos
    const index = productos.findIndex(producto => producto.nombre === nombreProducto);
  
    // Verificar si el producto existe
    if (index === -1) {
      return res.status(404).send('El producto no existe');
    }
  
    // Eliminar el producto del array
    productos.splice(index, 1);
  
    res.redirect('/productos');
  }
  }
  
  module.exports = new ProductosController();
