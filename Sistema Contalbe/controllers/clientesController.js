const clientes = []; // Array para almacenar los clientes

class ClientesController {
  mostrarClientes(req, res) {
    res.render('mostrarClientes', { clientes });
  }

  agregarCliente(req, res) {
    // Obtener los datos del cliente del cuerpo de la solicitud
    const { nombre, edad, email } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre || !edad || !email) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Crear un nuevo objeto cliente
    const nuevoCliente = {
      nombre,
      edad,
      email
    };

    // Agregar el nuevo cliente al array
    clientes.push(nuevoCliente);
    res.redirect('/clientes');
    // Enviar una respuesta con el cliente agregado
    res.status(201).send(nuevoCliente);

    // Redireccionar a la página de lista de clientes
  }
}

module.exports = new ClientesController();