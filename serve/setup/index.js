;
'use strict'

const sequelize = require('../config/config');

const app = require('./app'),
      port =   process.env.PORT || 3500

      app.listen(port, function () {
          console.log(`Servidor funcionando en ${port}` );

        sequelize.authenticate().then(() => {
            console.log("Base de Datos Conectada");
        }).catch(error => {
            console.log(error); 
        })
      })