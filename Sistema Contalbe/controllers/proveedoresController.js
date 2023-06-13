const proveedores = []; // Array para almacenar los proveedores

class ProveedoresController {
  mostrarProveedores(req, res) {
    res.render('mostrarProveedores', { proveedores });
  }

  agregarProveedor(req, res) {
    // Obtener los datos del proveedor del cuerpo de la solicitud
    const { nombre, direccion, telefono } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre || !direccion || !telefono) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Crear un nuevo objeto proveedor
    const nuevoProveedor = {
      nombre,
      direccion,
      telefono
    };

    // Agregar el nuevo proveedor al array
    proveedores.push(nuevoProveedor);
    res.redirect('/proveedores');
    // Enviar una respuesta con el proveedor agregado
    res.status(201).send(nuevoProveedor);
  }
}
module.exports = new ProveedoresController();