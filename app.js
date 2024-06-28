const mongoose = require('mongoose');

const url_bd = 'mongodb://localhost:27017/compania';

mongoose.connect(url_bd)
    .then(() => {
        console.log('bien cawn');
    })
    .catch((err) => {
        console.log('dont suck cabezon', err);
    });

// Esquema para la base de datos
const esquema_empleados = new mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    fecha_contratacion: {
        type: Date
    },
    departamento: {
        type: String
    },
    salario: {
        type: Number
    },
    estado: {
        type: String // Activo o Inactivo
    }
});

// Creando colección
const Empleados = mongoose.model('empleados', esquema_empleados);

// Insertando un documento
Empleados.create({
    "nombre": "Juan",
    "apellido": "Pérez",
    "fecha_contratacion": new Date("2020-01-15"),
    "departamento": "Recursos Humanos",
    "salario": 50000,
    "estado": "Activo"
})