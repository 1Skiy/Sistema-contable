const facturas = []; // Array para almacenar las facturas
class FacturasController {
  mostrarFacturas(req, res) {
    // Lógica para mostrar las facturas
    res.render('mostrarFacturas', { facturas });
  }
  
    agregarFactura(req, res) {
      // Obtener los datos de la factura del cuerpo de la solicitud
      const { fecha, monto, nombre } = req.body;
  
      // Validar que se proporcionen todos los campos requeridos
      if (!fecha || !monto || !nombre) {
        return res.status(400).send('Todos los campos son obligatorios');
      }
  
      // Crear un nuevo objeto factura
      const nuevaFactura = {
        fecha,
        monto,
        nombre
      };
  
      // Agregar la nueva factura al array
      facturas.push(nuevaFactura);
  
      // Redireccionar a la página de lista de facturas
      res.redirect('/facturas');
    }
  
    
      buscarFacturasPorFecha(req, res) {
        const { fecha } = req.body;
    
        // Filtrar las facturas por la fecha especificada
        const facturasEncontradas = facturas.filter(factura => factura.fecha === fecha);
    
        if (facturasEncontradas.length === 0) {
          return res.status(404).send('No se encontraron facturas para la fecha especificada');
        }
    
        res.render('facturas-encontradas', { facturas: facturasEncontradas });
      }

    
      eliminarFactura(req, res) {
        const nombreFactura = req.params.nombre;
      
        // Buscar el índice de la factura en el array de facturas
        const index = facturas.findIndex(factura => factura.nombre === nombreFactura);
      
        // Verificar si la factura existe
        if (index === -1) {
          return res.status(404).send('La factura no existe');
        }
      
        // Eliminar la factura del array
        facturas.splice(index, 1);
      
        res.redirect('/facturas');
      }
      
  }
  
  module.exports = new FacturasController();