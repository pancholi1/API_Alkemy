'use strict';

const { User, Peliculas, Generos } = require("../src/models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    await Generos.create({
      imagen: "suspenso",
      nombre:"suspénsos"
    })
    await Generos.create({
      imagen: "terror",
      nombre:"terror"
    })

   await Peliculas.create({
    imagen: "fotos de ojos",
    titulo: "Detras de sus ojos",
    fechaCreacion: " 2017 ",
    calificacion: 5,
    PeliculasGenerosIdGenero:2,
    personajes: [{
      imagen: "http",
      nombre: "roberto",
      edad : 45,
      peso: 80,
      historia: "asdasdasd"
    },
    {
      imagen: "foto_perfil",
      nombre: "julio",
      edad : 23,
      peso: 53,
      historia: "mejor peli de suspenso que se conocio"
    },
   
  ]
   },{include : "personajes"})

   await Peliculas.create({
    imagen: "foto_portada",
    titulo: "Harry potter",
    fechaCreacion: "1970-01-01T00:00:02.321Z",
    calificacion: 4,
    PeliculasGenerosIdGenero:1,
    personajes: [{
      imagen: "foto_perfil",
      nombre: "ron wesly",
      edad : 15,
      peso: 80,
      historia: "colorado y anda saber que mas"
    }],


   },{include : "personajes"}, {include : "Peliculas_Generos"})







  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
