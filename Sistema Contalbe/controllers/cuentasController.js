const cuentas = []; // Array para almacenar las cuentas
class CuentasController {
  mostrarCuentas(req, res) {
    res.render('mostrarCuentas', { cuentas });
  }
  

  agregarCuenta(req, res) {
    // Obtener los datos de la cuenta del cuerpo de la solicitud
    const { nombre, tipo, estado } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre|| !tipo || !estado) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Crear un nuevo objeto cuenta
    const nuevaCuenta = {
      nombre,
      tipo,
      estado
    };
    // Agregar la nueva cuenta al array
    cuentas.push(nuevaCuenta);
    res.redirect('/cuentas');
    // Enviar una respuesta con la cuenta agregada
    res.status(201).send(nuevaCuenta);
  }

  mostrarFormularioEditar(req, res) {
    const nombreCuenta = req.params.nombre;
  
    // Buscar la cuenta en el array de cuentas por su nombre
    const cuenta = cuentas.find(cuenta => cuenta.nombre === nombreCuenta);
  
    // Verificar si la cuenta existe
    if (!cuenta) {
      return res.status(404).send('La cuenta no existe');
    }
  
    // Renderizar el formulario de edición de la cuenta
    res.render('editarCuentas', { cuenta });
  }

  editarCuenta(req, res) {
    // Obtener los nuevos valores de la cuenta del cuerpo de la solicitud
    const { tipo, estado } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!tipo || !estado) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Buscar la cuenta por su nombre en el array
    const cuenta = cuentas.find(cuenta => cuenta.nombre === req.params.nombre);

    // Verificar si la cuenta existe
    if (!cuenta) {
      return res.status(404).send('La cuenta no existe');
    }

    // Actualizar los valores en la cuenta encontrada
    cuenta.tipo = tipo;
    cuenta.estado = estado;

    res.redirect('/cuentas');
  }
  

  eliminarCuenta(req, res) {
    const nombreCuenta = req.params.nombre;
  
    // Buscar el índice de la cuenta en el array
    const index = cuentas.findIndex(cuenta => cuenta.nombre === nombreCuenta);
  
    // Verificar si la cuenta existe
    if (index === -1) {
      return res.status(404).send('La cuenta no existe');
    }
  
    // Eliminar la cuenta del array
    cuentas.splice(index, 1);
  
    res.redirect('/cuentas');
  }
  
}
 module.exports = new CuentasController();