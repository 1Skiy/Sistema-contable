var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página de inicio' });
});


var cuentasController = require('../controllers/cuentasController');
var clientesController = require('../controllers/clientesController');
var proveedoresController = require('../controllers/proveedoresController');
var facturasController = require('../controllers/facturasController');
var productosController = require('../controllers/productosController');

// Rutas para las cuentas
router.get('/cuentas', cuentasController.mostrarCuentas);
router.post('/cuentas/agregar', cuentasController.agregarCuenta);

router.get('/cuentas/agregar', function(req, res) {
  res.render('agregarCuenta');
});

router.get('/cuentas/:nombre/editar', cuentasController.mostrarFormularioEditar);
router.post('/cuentas/:nombre/editar', cuentasController.editarCuenta);

router.delete('/cuentas/:nombre', cuentasController.eliminarCuenta);
router.get('/cuentas/:nombre/eliminar', cuentasController.eliminarCuenta);

// Rutas para los clientes
router.get('/clientes', clientesController.mostrarClientes);
router.post('/clientes/agregar', clientesController.agregarCliente);

router.get('/clientes/agregar', function(req, res) {
  res.render('agregarCliente');
});

router.post('/clientes/agregar', function(req, res) {
  res.redirect('/clientes'); // Redireccionar a la página de lista de clientes
});

// Rutas para los proveedores
router.get('/proveedores', proveedoresController.mostrarProveedores);
router.post('/proveedores/agregar', proveedoresController.agregarProveedor);


router.get('/proveedores/agregar', function(req, res) {
  res.render('agregarProveedor');
});

router.post('/proveedores/agregar', function(req, res) {
  res.redirect('/proveedores'); // Redireccionar a la página de lista de proveedores
});


// Rutas para las facturas
router.get('/facturas', facturasController.mostrarFacturas);
router.post('/facturas/agregar', facturasController.agregarFactura);

router.get('/facturas/agregar', function(req, res) {
  res.render('agregarFactura');
});

router.post('/facturas/buscar', facturasController.buscarFacturasPorFecha);

// Ruta para mostrar facturas encontradas
router.get('/facturas-encontradas', function(req, res) {
  res.render('facturas-encontradas');
});

router.delete('/facturas/:nombre', facturasController.eliminarFactura);
router.get('/facturas/:nombre/eliminar', facturasController.eliminarFactura);

// Rutas para los productos o servicios
router.get('/productos', productosController.mostrarProductos);
router.post('/productos/agregar', productosController.agregarProducto);

router.get('/productos/agregar', function(req, res) {
  res.render('agregarProductos');
});

router.delete('/productos/:nombre', productosController.eliminarProducto);
router.get('/productos/:nombre/eliminar', productosController.eliminarProducto);

module.exports = router;