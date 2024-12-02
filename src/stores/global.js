import { defineStore } from 'pinia';
import * as authService from "src/services/auth";
import { errorAlert, infoAlert } from "src/utils/notify";
import axios from 'axios'


const initialState = {
   apiURL: "http://localhost:8000/",
   regions:[
      {
        "name": "TARAPACA",
        "label": "REGIÓN DE TARAPACA",
        "code": "I",
        "id": 1
      },
      {
        "name": "ANTOFAGASTA",
        "label": "REGIÓN DE ANTOFAGASTA",
        "code": "II",
        "id": 2
      },
      {
        "name": "ATACAMA",
        "label": "REGIÓN DE ATACAMA",
        "code": "III",
        "id": 3
      },
      {
        "name": "COQUIMBO",
        "label": "REGIÓN DE COQUIMBO",
        "code": "IV",
        "id": 4
      },
      {
        "name": "VALPARAISO",
        "label": "REGIÓN DE VALPARAISO",
        "code": "V",
        "id": 5
      },
      {
        "name": "LIB.BERNARDO O'HIGGINS",
        "label": "REGIÓN DEL LIB.BERNARDO O'HIGGINS",
        "code": "VI",
        "id": 6
      },
      {
        "name": "MAULE",
        "label": "REGIÓN DEL MAULE",
        "code": "VII",
        "id": 7
      },
      {
        "name": "BIO-BIO",
        "label": "REGIÓN DEL BIO-BIO",
        "code": "VIII",
        "id": 8
      },
      {
        "name": "LA ARAUCANIA",
        "label": "REGIÓN DE LA ARAUCANIA",
        "code": "IX",
        "id": 9
      },
      {
        "name": "LOS LAGOS",
        "label": "REGIÓN DE LOS LAGOS",
        "code": "X",
        "id": 10
      },
      {
        "name": "AISEN",
        "label": "REGIÓN DE AISEN",
        "code": "XI",
        "id": 11
      },
      {
        "name": "MAGALLANES",
        "label": "REGIÓN DE MAGALLANES",
        "code": "XII",
        "id": 12
      },
      {
        "name": "REGION METROPOLITANA",
        "label": "REGIÓN METROPOLITANA",
        "code": "RM",
        "id": 13
      },
      {
        "name": "DE LOS RIOS",
        "label": "REGIÓN DE LOS RIOS",
        "code": "XIV",
        "id": 14
      },
      {
        "name": "ARICA Y PARINACOTA",
        "label": "REGIÓN DE ARICA Y PARINACOTA",
        "code": "XV",
        "id": 15
      },
      {
        "name": "ÑUBLE",
        "label": "REGIÓN DE ÑUBLE",
        "code": "XVI",
        "id": 16
      }
   ],
   communes:[
      {
         "region_id": 1,
         "city_id": 1,
         "name": "ALTO HOSPICIO",
         "sf_id": "a0a5Y00000hpTeHQAU"
      },
      {
        "region_id": 1,
        "city_id": 1,
        "name": "IQUIQUE",
        "sf_id": "a0a5Y00000hpTe3QAE"
      },
      {
        "region_id": 1,
        "city_id": 2,
        "name": "CAMIÑA",
        "sf_id": "a0a5Y00000hpTedQAE"
      },
      {
        "region_id": 1,
        "city_id": 2,
        "name": "COLCHANE",
        "sf_id": "a0a5Y00000hpTbKQAU"
      },
      {
        "region_id": 1,
        "city_id": 2,
        "name": "HUARA",
        "sf_id": "a0a5Y00000hpTdyQAE"
      },
      {
        "region_id": 1,
        "city_id": 2,
        "name": "PICA",
        "sf_id": "a0a5Y00000hpTckQAE"
      },
      {
        "region_id": 1,
        "city_id": 2,
        "name": "POZO ALMONTE",
        "sf_id": "a0a5Y00000hpTctQAE"
      },
      {
        "region_id": 2,
        "city_id": 3,
        "name": "ANTOFAGASTA",
        "sf_id": "a0a5Y00000hpTeMQAU"
      },
      {
        "region_id": 2,
        "city_id": 3,
        "name": "MEJILLONES",
        "sf_id": "a0a5Y00000hpTaDQAU"
      },
      {
        "region_id": 2,
        "city_id": 3,
        "name": "SIERRA GORDA",
        "sf_id": "a0a5Y00000hpTbyQAE"
      },
      {
        "region_id": 2,
        "city_id": 3,
        "name": "TALTAL",
        "sf_id": "a0a5Y00000hpTc2QAE"
      },
      {
        "region_id": 2,
        "city_id": 4,
        "name": "CALAMA",
        "sf_id": "a0a5Y00000hpTeWQAU"
      },
      {
        "region_id": 2,
        "city_id": 4,
        "name": "OLLAGÜE",
        "sf_id": "a0a5Y00000hpTaVQAU"
      },
      {
        "region_id": 2,
        "city_id": 4,
        "name": "SAN PEDRO DE ATACAMA",
        "sf_id": "a0a5Y00000hpTboQAE"
      },
      {
        "region_id": 2,
        "city_id": 5,
        "name": "MARIA ELENA",
        "sf_id": "a0a5Y00000hpTfiQAE"
      },
      {
        "region_id": 2,
        "city_id": 5,
        "name": "TOCOPILLA",
        "sf_id": "a0a5Y00000hpTcAQAU"
      },
      {
        "region_id": 3,
        "city_id": 6,
        "name": "CHAÑARAL",
        "sf_id": "a0a5Y00000hpTfPQAU"
      },
      {
        "region_id": 3,
        "city_id": 6,
        "name": "DIEGO DE ALMAGRO",
        "sf_id": "a0a5Y00000hpTdGQAU"
      },
      {
        "region_id": 3,
        "city_id": 7,
        "name": "CALDERA",
        "sf_id": "a0a5Y00000hpTeYQAU"
      },
      {
        "region_id": 3,
        "city_id": 7,
        "name": "COPIAPO",
        "sf_id": "a0a5Y00000hpTbUQAU"
      },
      {
        "region_id": 3,
        "city_id": 7,
        "name": "TIERRA AMARILLA",
        "sf_id": "a0a5Y00000hpTc6QAE"
      },
      {
        "region_id": 3,
        "city_id": 8,
        "name": "ALTO DEL CARMEN",
        "sf_id": "a0a5Y00000hpTeGQAU"
      },
      {
        "region_id": 3,
        "city_id": 8,
        "name": "FREIRINA",
        "sf_id": "a0a5Y00000hpTdSQAU"
      },
      {
        "region_id": 3,
        "city_id": 8,
        "name": "HUASCO",
        "sf_id": "a0a5Y00000hpTdzQAE"
      },
      {
        "region_id": 3,
        "city_id": 8,
        "name": "VALLENAR",
        "sf_id": "a0a5Y00000hpTcKQAU"
      },
      {
        "region_id": 4,
        "city_id": 9,
        "name": "CANELA",
        "sf_id": "a0a5Y00000hpTeuQAE"
      },
      {
        "region_id": 4,
        "city_id": 9,
        "name": "ILLAPEL",
        "sf_id": "a0a5Y00000hpTe1QAE"
      },
      {
        "region_id": 4,
        "city_id": 9,
        "name": "LOS VILOS",
        "sf_id": "a0a5Y00000hpTb9QAE"
      },
      {
        "region_id": 4,
        "city_id": 9,
        "name": "SALAMANCA",
        "sf_id": "a0a5Y00000hpTdcQAE"
      },
      {
        "region_id": 4,
        "city_id": 10,
        "name": "ANDACOLLO",
        "sf_id": "a0a5Y00000hpTeJQAU"
      },
      {
        "region_id": 4,
        "city_id": 10,
        "name": "COQUIMBO",
        "sf_id": "a0a5Y00000hpTbVQAU"
      },
      {
        "region_id": 4,
        "city_id": 10,
        "name": "LA HIGUERA",
        "sf_id": "a0a5Y00000hpTdpQAE"
      },
      {
        "region_id": 4,
        "city_id": 10,
        "name": "LA SERENA",
        "sf_id": "a0a5Y00000hpTdtQAE"
      },
      {
        "region_id": 4,
        "city_id": 10,
        "name": "PAIHUANO",
        "sf_id": "a0a5Y00000hpTaaQAE"
      },
      {
        "region_id": 4,
        "city_id": 10,
        "name": "VICUÑA",
        "sf_id": "a0a5Y00000hpTcPQAU"
      },
      {
        "region_id": 4,
        "city_id": 11,
        "name": "COMBARBALA",
        "sf_id": "a0a5Y00000hpTbOQAU"
      },
      {
        "region_id": 4,
        "city_id": 11,
        "name": "MONTE PATRIA",
        "sf_id": "a0a5Y00000hpTaHQAU"
      },
      {
        "region_id": 4,
        "city_id": 11,
        "name": "OVALLE",
        "sf_id": "a0a5Y00000hpTaXQAU"
      },
      {
        "region_id": 4,
        "city_id": 11,
        "name": "PUNITAQUI",
        "sf_id": "a0a5Y00000hpTd4QAE"
      },
      {
        "region_id": 4,
        "city_id": 11,
        "name": "RIO HURTADO",
        "sf_id": "a0a5Y00000hpTfGQAU"
      },
      {
        "region_id": 5,
        "city_id": 12,
        "name": "ISLA DE PASCUA",
        "sf_id": "a0a5Y00000hpTe5QAE"
      },
      {
        "region_id": 5,
        "city_id": 13,
        "name": "CALLE LARGA",
        "sf_id": "a0a5Y00000hpTebQAE"
      },
      {
        "region_id": 5,
        "city_id": 13,
        "name": "LOS ANDES",
        "sf_id": "a0a5Y00000hpTb4QAE"
      },
      {
        "region_id": 5,
        "city_id": 13,
        "name": "RINCONADA",
        "sf_id": "a0a5Y00000hpTfDQAU"
      },
      {
        "region_id": 5,
        "city_id": 13,
        "name": "SAN ESTEBAN",
        "sf_id": "a0a5Y00000hpTdhQAE"
      },
      {
        "region_id": 5,
        "city_id": 14,
        "name": "CABILDO",
        "sf_id": "a0a5Y00000hpTeTQAU"
      },
      {
        "region_id": 5,
        "city_id": 14,
        "name": "LA LIGUA",
        "sf_id": "a0a5Y00000hpTdqQAE"
      },
      {
        "region_id": 5,
        "city_id": 14,
        "name": "PAPUDO",
        "sf_id": "a0a5Y00000hpTe7QAE"
      },
      {
        "region_id": 5,
        "city_id": 14,
        "name": "PETORCA",
        "sf_id": "a0a5Y00000hpTciQAE"
      },
      {
        "region_id": 5,
        "city_id": 14,
        "name": "ZAPALLAR",
        "sf_id": "a0a5Y00000hpTcZQAU"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "CALERA",
        "sf_id": "a0a5Y00000hpTeZQAU"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "HIJUELAS",
        "sf_id": "a0a5Y00000hpTagQAE"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "LA CRUZ",
        "sf_id": "a0a5Y00000hpTepQAE"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "LIMACHE",
        "sf_id": "a0a5Y00000hpTasQAE"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "NOGALES",
        "sf_id": "a0a5Y00000hpTaQQAU"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "OLMUE",
        "sf_id": "a0a5Y00000hpTeBQAU"
      },
      {
        "region_id": 5,
        "city_id": 15,
        "name": "QUILLOTA",
        "sf_id": "a0a5Y00000hpTexQAE"
      },
      {
        "region_id": 5,
        "city_id": 16,
        "name": "ALGARROBO",
        "sf_id": "a0a5Y00000hpTeDQAU"
      },
      {
        "region_id": 5,
        "city_id": 16,
        "name": "CARTAGENA",
        "sf_id": "a0a5Y00000hpTegQAE"
      },
      {
        "region_id": 5,
        "city_id": 16,
        "name": "EL QUISCO",
        "sf_id": "a0a5Y00000hpTdLQAU"
      },
      {
        "region_id": 5,
        "city_id": 16,
        "name": "EL TABO",
        "sf_id": "a0a5Y00000hpTdMQAU"
      },
      {
        "region_id": 5,
        "city_id": 16,
        "name": "SAN ANTONIO",
        "sf_id": "a0a5Y00000hpTddQAE"
      },
      {
        "region_id": 5,
        "city_id": 16,
        "name": "SANTO DOMINGO",
        "sf_id": "a0a5Y00000hpTbxQAE"
      },
      {
        "region_id": 5,
        "city_id": 17,
        "name": "CATEMU",
        "sf_id": "a0a5Y00000hpTejQAE"
      },
      {
        "region_id": 5,
        "city_id": 17,
        "name": "LLAY LLAY",
        "sf_id": "a0a5Y00000hpTawQAE"
      },
      {
        "region_id": 5,
        "city_id": 17,
        "name": "PANQUEHUE",
        "sf_id": "a0a5Y00000hpTe9QAE"
      },
      {
        "region_id": 5,
        "city_id": 17,
        "name": "PUTAENDO",
        "sf_id": "a0a5Y00000hpTd9QAE"
      },
      {
        "region_id": 5,
        "city_id": 17,
        "name": "SAN FELIPE",
        "sf_id": "a0a5Y00000hpTdjQAE"
      },
      {
        "region_id": 5,
        "city_id": 17,
        "name": "SANTA MARIA",
        "sf_id": "a0a5Y00000hpTbvQAE"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "CASABLANCA",
        "sf_id": "a0a5Y00000hpTehQAE"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "CONCON",
        "sf_id": "a0a5Y00000hpTbRQAU"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "JUAN FERNANDEZ",
        "sf_id": "a0a5Y00000hpTenQAE"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "PUCHUNCAVI",
        "sf_id": "a0a5Y00000hpTcwQAE"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "QUILPUE",
        "sf_id": "a0a5Y00000hpTeyQAE"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "QUINTERO",
        "sf_id": "a0a5Y00000hpTf2QAE"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "VALPARAISO",
        "sf_id": "a0a5Y00000hpTcLQAU"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "VILLA ALEMANA",
        "sf_id": "a0a5Y00000hpTcSQAU"
      },
      {
        "region_id": 5,
        "city_id": 18,
        "name": "VIÑA DEL MAR",
        "sf_id": "a0a5Y00000hpTcUQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "CODEGUA",
        "sf_id": "a0a5Y00000hpTbFQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "COINCO",
        "sf_id": "a0a5Y00000hpTbIQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "COLTAUCO",
        "sf_id": "a0a5Y00000hpTbNQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "DOÑIHUE",
        "sf_id": "a0a5Y00000hpTdHQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "GRANEROS",
        "sf_id": "a0a5Y00000hpTaeQAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "LAS CABRAS",
        "sf_id": "a0a5Y00000hpTanQAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "MACHALI",
        "sf_id": "a0a5Y00000hpTbCQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "MALLOA",
        "sf_id": "a0a5Y00000hpTffQAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "MOSTAZAL",
        "sf_id": "a0a5Y00000hpTaIQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "OLIVAR",
        "sf_id": "a0a5Y00000hpTaUQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "PEUMO",
        "sf_id": "a0a5Y00000hpTcjQAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "PICHIDEGUA",
        "sf_id": "a0a5Y00000hpTclQAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "QUINTA DE TILCOCO",
        "sf_id": "a0a5Y00000hpTf0QAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "RANCAGUA",
        "sf_id": "a0a5Y00000hpTf4QAE"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "RENGO",
        "sf_id": "a0a5Y00000hpTfAQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "REQUINOA",
        "sf_id": "a0a5Y00000hpTfBQAU"
      },
      {
        "region_id": 6,
        "city_id": 19,
        "name": "SAN VICENTE",
        "sf_id": "a0a5Y00000hpTbtQAE"
      },
      {
        "region_id": 6,
        "city_id": 20,
        "name": "LA ESTRELLA",
        "sf_id": "a0a5Y00000hpTeqQAE"
      },
      {
        "region_id": 6,
        "city_id": 20,
        "name": "LITUECHE",
        "sf_id": "a0a5Y00000hpTauQAE"
      },
      {
        "region_id": 6,
        "city_id": 20,
        "name": "MARCHIGÜE",
        "sf_id": "a0a5Y00000hpTfhQAE"
      },
      {
        "region_id": 6,
        "city_id": 20,
        "name": "NAVIDAD",
        "sf_id": "a0a5Y00000hpTaNQAU"
      },
      {
        "region_id": 6,
        "city_id": 20,
        "name": "PAREDONES",
        "sf_id": "a0a5Y00000hpTeAQAU"
      },
      {
        "region_id": 6,
        "city_id": 20,
        "name": "PICHILEMU",
        "sf_id": "a0a5Y00000hpTcmQAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "CHEPICA",
        "sf_id": "a0a5Y00000hpTfRQAU"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "CHIMBARONGO",
        "sf_id": "a0a5Y00000hpTfWQAU"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "LOLOL",
        "sf_id": "a0a5Y00000hpTb0QAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "NANCAGUA",
        "sf_id": "a0a5Y00000hpTaLQAU"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "PALMILLA",
        "sf_id": "a0a5Y00000hpTe6QAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "PERALILLO",
        "sf_id": "a0a5Y00000hpTcgQAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "PLACILLA",
        "sf_id": "a0a5Y00000hpTcqQAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "PUMANQUE",
        "sf_id": "a0a5Y00000hpTd3QAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "SAN FERNANDO",
        "sf_id": "a0a5Y00000hpTdkQAE"
      },
      {
        "region_id": 6,
        "city_id": 21,
        "name": "SANTA CRUZ",
        "sf_id": "a0a5Y00000hpTbuQAE"
      },
      {
        "region_id": 7,
        "city_id": 22,
        "name": "CAUQUENES",
        "sf_id": "a0a5Y00000hpTekQAE"
      },
      {
        "region_id": 7,
        "city_id": 22,
        "name": "CHANCO",
        "sf_id": "a0a5Y00000hpTfQQAU"
      },
      {
        "region_id": 7,
        "city_id": 22,
        "name": "PELLUHUE",
        "sf_id": "a0a5Y00000hpTcaQAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "CURICO",
        "sf_id": "a0a5Y00000hpTbgQAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "HUALAÑE",
        "sf_id": "a0a5Y00000hpTaiQAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "LICANTEN",
        "sf_id": "a0a5Y00000hpTarQAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "MOLINA",
        "sf_id": "a0a5Y00000hpTaGQAU"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "RAUCO",
        "sf_id": "a0a5Y00000hpTf6QAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "ROMERAL",
        "sf_id": "a0a5Y00000hpTfKQAU"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "SAGRADA FAMILIA",
        "sf_id": "a0a5Y00000hpTdbQAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "TENO",
        "sf_id": "a0a5Y00000hpTc4QAE"
      },
      {
        "region_id": 7,
        "city_id": 23,
        "name": "VICHUQUEN",
        "sf_id": "a0a5Y00000hpTcNQAU"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "COLBUN",
        "sf_id": "a0a5Y00000hpTbJQAU"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "LINARES",
        "sf_id": "a0a5Y00000hpTatQAE"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "LONGAVI",
        "sf_id": "a0a5Y00000hpTb1QAE"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "PARRAL",
        "sf_id": "a0a5Y00000hpTfLQAU"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "RETIRO",
        "sf_id": "a0a5Y00000hpTfCQAU"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "SAN JAVIER",
        "sf_id": "a0a5Y00000hpTdoQAE"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "VILLA ALEGRE",
        "sf_id": "a0a5Y00000hpTcRQAU"
      },
      {
        "region_id": 7,
        "city_id": 24,
        "name": "YERBAS BUENAS",
        "sf_id": "a0a5Y00000hpTcWQAU"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "CONSTITUCION",
        "sf_id": "a0a5Y00000hpTbSQAU"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "CUREPTO",
        "sf_id": "a0a5Y00000hpTbfQAE"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "EMPEDRADO",
        "sf_id": "a0a5Y00000hpTdNQAU"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "MAULE",
        "sf_id": "a0a5Y00000hpTflQAE"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "PELARCO",
        "sf_id": "a0a5Y00000hpTfNQAU"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "PENCAHUE",
        "sf_id": "a0a5Y00000hpTceQAE"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "RIO CLARO",
        "sf_id": "a0a5Y00000hpTfFQAU"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "SAN CLEMENTE",
        "sf_id": "a0a5Y00000hpTdgQAE"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "SAN RAFAEL",
        "sf_id": "a0a5Y00000hpTbqQAE"
      },
      {
        "region_id": 7,
        "city_id": 25,
        "name": "TALCA",
        "sf_id": "a0a5Y00000hpTc0QAE"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "ARAUCO",
        "sf_id": "a0a5Y00000hpTeOQAU"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "CAÑETE",
        "sf_id": "a0a5Y00000hpTeeQAE"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "CONTULMO",
        "sf_id": "a0a5Y00000hpTbTQAU"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "CURANILAHUE",
        "sf_id": "a0a5Y00000hpTbdQAE"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "LEBU",
        "sf_id": "a0a5Y00000hpTaqQAE"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "LOS ALAMOS",
        "sf_id": "a0a5Y00000hpTb3QAE"
      },
      {
        "region_id": 8,
        "city_id": 26,
        "name": "TIRUA",
        "sf_id": "a0a5Y00000hpTc9QAE"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "ALTO BIOBIO",
        "sf_id": "a0a5Y00000hpTeFQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "ANTUCO",
        "sf_id": "a0a5Y00000hpTeNQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "CABRERO",
        "sf_id": "a0a5Y00000hpTeVQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "LAJA",
        "sf_id": "a0a5Y00000hpTakQAE"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "LOS ANGELES",
        "sf_id": "a0a5Y00000hpTb5QAE"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "MULCHEN",
        "sf_id": "a0a5Y00000hpTaJQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "NACIMIENTO",
        "sf_id": "a0a5Y00000hpTaKQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "NEGRETE",
        "sf_id": "a0a5Y00000hpTaOQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "QUILACO",
        "sf_id": "a0a5Y00000hpTdmQAE"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "QUILLECO",
        "sf_id": "a0a5Y00000hpTevQAE"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "SAN ROSENDO",
        "sf_id": "a0a5Y00000hpTbsQAE"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "SANTA BARBARA",
        "sf_id": "a0a5Y00000hpTcMQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "TUCAPEL",
        "sf_id": "a0a5Y00000hpTcHQAU"
      },
      {
        "region_id": 8,
        "city_id": 27,
        "name": "YUMBEL",
        "sf_id": "a0a5Y00000hpTcXQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "CHIGUAYANTE",
        "sf_id": "a0a5Y00000hpTfSQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "CONCEPCION",
        "sf_id": "a0a5Y00000hpTbPQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "CORONEL",
        "sf_id": "a0a5Y00000hpTbWQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "FLORIDA",
        "sf_id": "a0a5Y00000hpTdQQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "HUALPEN",
        "sf_id": "a0a5Y00000hpTeCQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "HUALQUI",
        "sf_id": "a0a5Y00000hpTdxQAE"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "LOTA",
        "sf_id": "a0a5Y00000hpTbAQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "PENCO",
        "sf_id": "a0a5Y00000hpTcfQAE"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "SAN PEDRO DE LA PAZ",
        "sf_id": "a0a5Y00000hpTbpQAE"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "SANTA JUANA",
        "sf_id": "a0a5Y00000hpTcJQAU"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "TALCAHUANO",
        "sf_id": "a0a5Y00000hpTc1QAE"
      },
      {
        "region_id": 8,
        "city_id": 28,
        "name": "TOME",
        "sf_id": "a0a5Y00000hpTcCQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "CARAHUE",
        "sf_id": "a0a5Y00000hpTefQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "CHOLCHOL",
        "sf_id": "a0a5Y00000hpTfXQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "CUNCO",
        "sf_id": "a0a5Y00000hpTbZQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "CURARREHUE",
        "sf_id": "a0a5Y00000hpTbeQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "FREIRE",
        "sf_id": "a0a5Y00000hpTdRQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "GALVARINO",
        "sf_id": "a0a5Y00000hpTdXQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "GORBEA",
        "sf_id": "a0a5Y00000hpTdZQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "LAUTARO",
        "sf_id": "a0a5Y00000hpTapQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "LONCOCHE",
        "sf_id": "a0a5Y00000hpTfgQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "MELIPEUCO",
        "sf_id": "a0a5Y00000hpTaEQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "NUEVA IMPERIAL",
        "sf_id": "a0a5Y00000hpTaRQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "PADRE LAS CASAS",
        "sf_id": "a0a5Y00000hpTaZQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "PERQUENCO",
        "sf_id": "a0a5Y00000hpTchQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "PITRUFQUEN",
        "sf_id": "a0a5Y00000hpTcpQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "PUCON",
        "sf_id": "a0a5Y00000hpTcxQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "SAAVEDRA",
        "sf_id": "a0a5Y00000hpTdaQAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "TEMUCO",
        "sf_id": "a0a5Y00000hpTc3QAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "TEODORO SCHMIDT",
        "sf_id": "a0a5Y00000hpTc5QAE"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "TOLTEN",
        "sf_id": "a0a5Y00000hpTcBQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "VILCUN",
        "sf_id": "a0a5Y00000hpTcQQAU"
      },
      {
        "region_id": 9,
        "city_id": 29,
        "name": "VILLARRICA",
        "sf_id": "a0a5Y00000hpTcTQAU"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "ANGOL",
        "sf_id": "a0a5Y00000hpTeKQAU"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "COLLIPULLI",
        "sf_id": "a0a5Y00000hpTbMQAU"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "CURACAUTIN",
        "sf_id": "a0a5Y00000hpTbaQAE"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "ERCILLA",
        "sf_id": "a0a5Y00000hpTdOQAU"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "LONQUIMAY",
        "sf_id": "a0a5Y00000hpTb2QAE"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "LOS SAUCES",
        "sf_id": "a0a5Y00000hpTb8QAE"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "LUMACO",
        "sf_id": "a0a5Y00000hpTbBQAU"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "PUREN",
        "sf_id": "a0a5Y00000hpTd7QAE"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "RENAICO",
        "sf_id": "a0a5Y00000hpTf8QAE"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "TRAIGUEN",
        "sf_id": "a0a5Y00000hpTcFQAU"
      },
      {
        "region_id": 9,
        "city_id": 30,
        "name": "VICTORIA",
        "sf_id": "a0a5Y00000hpTcOQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "ANCUD",
        "sf_id": "a0a5Y00000hpTeIQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "CASTRO",
        "sf_id": "a0a5Y00000hpTeiQAE"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "CHONCHI",
        "sf_id": "a0a5Y00000hpTfYQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "CURACO DE VELEZ",
        "sf_id": "a0a5Y00000hpTbcQAE"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "DALCAHUE",
        "sf_id": "a0a5Y00000hpTdFQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "PUQUELDON",
        "sf_id": "a0a5Y00000hpTd6QAE"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "QUEILEN",
        "sf_id": "a0a5Y00000hpTdCQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "QUELLON",
        "sf_id": "a0a5Y00000hpTdDQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "QUEMCHI",
        "sf_id": "a0a5Y00000hpTdEQAU"
      },
      {
        "region_id": 10,
        "city_id": 31,
        "name": "QUINCHAO",
        "sf_id": "a0a5Y00000hpTezQAE"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "CALBUCO",
        "sf_id": "a0a5Y00000hpTeXQAU"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "COCHAMO",
        "sf_id": "a0a5Y00000hpTfbQAE"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "FRESIA",
        "sf_id": "a0a5Y00000hpTdTQAU"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "FRUTILLAR",
        "sf_id": "a0a5Y00000hpTdUQAU"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "LLANQUIHUE",
        "sf_id": "a0a5Y00000hpTavQAE"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "LOS MUERMOS",
        "sf_id": "a0a5Y00000hpTb7QAE"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "MAULLIN",
        "sf_id": "a0a5Y00000hpTfmQAE"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "PUERTO MONTT",
        "sf_id": "a0a5Y00000hpTd0QAE"
      },
      {
        "region_id": 10,
        "city_id": 32,
        "name": "PUERTO VARAS",
        "sf_id": "a0a5Y00000hpTd2QAE"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "OSORNO",
        "sf_id": "a0a5Y00000hpTaWQAU"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "PUERTO OCTAY",
        "sf_id": "a0a5Y00000hpTd1QAE"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "PURRANQUE",
        "sf_id": "a0a5Y00000hpTd8QAE"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "PUYEHUE",
        "sf_id": "a0a5Y00000hpTdBQAU"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "RIO NEGRO",
        "sf_id": "a0a5Y00000hpTfIQAU"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "SAN JUAN DE LA COSTA",
        "sf_id": "a0a5Y00000hpTbjQAE"
      },
      {
        "region_id": 10,
        "city_id": 33,
        "name": "SAN PABLO",
        "sf_id": "a0a5Y00000hpTbmQAE"
      },
      {
        "region_id": 10,
        "city_id": 34,
        "name": "CHAITEN",
        "sf_id": "a0a5Y00000hpTfOQAU"
      },
      {
        "region_id": 10,
        "city_id": 34,
        "name": "FUTALEUFU",
        "sf_id": "a0a5Y00000hpTdVQAU"
      },
      {
        "region_id": 10,
        "city_id": 34,
        "name": "HUALAIHUE",
        "sf_id": "a0a5Y00000hpTahQAE"
      },
      {
        "region_id": 10,
        "city_id": 34,
        "name": "PALENA",
        "sf_id": "a0a5Y00000hpTadQAE"
      },
      {
        "region_id": 11,
        "city_id": 35,
        "name": "AYSEN",
        "sf_id": "a0a5Y00000hpTeQQAU"
      },
      {
        "region_id": 11,
        "city_id": 35,
        "name": "CISNES",
        "sf_id": "a0a5Y00000hpTfZQAU"
      },
      {
        "region_id": 11,
        "city_id": 35,
        "name": "GUAITECAS",
        "sf_id": "a0a5Y00000hpTafQAE"
      },
      {
        "region_id": 11,
        "city_id": 36,
        "name": "COCHRANE",
        "sf_id": "a0a5Y00000hpTfcQAE"
      },
      {
        "region_id": 11,
        "city_id": 36,
        "name": "O'HIGGINS",
        "sf_id": "a0a5Y00000hpTaTQAU"
      },
      {
        "region_id": 11,
        "city_id": 36,
        "name": "TORTEL",
        "sf_id": "a0a5Y00000hpTcEQAU"
      },
      {
        "region_id": 11,
        "city_id": 37,
        "name": "COYHAIQUE",
        "sf_id": "a0a5Y00000hpTbYQAU"
      },
      {
        "region_id": 11,
        "city_id": 37,
        "name": "LAGO VERDE",
        "sf_id": "a0a5Y00000hpTdwQAE"
      },
      {
        "region_id": 11,
        "city_id": 38,
        "name": "CHILE CHICO",
        "sf_id": "a0a5Y00000hpTfTQAU"
      },
      {
        "region_id": 11,
        "city_id": 38,
        "name": "RIO IBAÑEZ",
        "sf_id": "a0a5Y00000hpTfHQAU"
      },
      {
        "region_id": 12,
        "city_id": 39,
        "name": "ANTARTICA",
        "sf_id": "a0a5Y00000hpTeLQAU"
      },
      {
        "region_id": 12,
        "city_id": 39,
        "name": "CABO DE HORNOS",
        "sf_id": "a0a5Y00000hpTeUQAU"
      },
      {
        "region_id": 12,
        "city_id": 40,
        "name": "LAGUNA BLANCA",
        "sf_id": "a0a5Y00000hpTajQAE"
      },
      {
        "region_id": 12,
        "city_id": 40,
        "name": "PUNTA ARENAS",
        "sf_id": "a0a5Y00000hpTd5QAE"
      },
      {
        "region_id": 12,
        "city_id": 40,
        "name": "RIO VERDE",
        "sf_id": "a0a5Y00000hpTfJQAU"
      },
      {
        "region_id": 12,
        "city_id": 40,
        "name": "SAN GREGORIO",
        "sf_id": "a0a5Y00000hpTdlQAE"
      },
      {
        "region_id": 12,
        "city_id": 41,
        "name": "PORVENIR",
        "sf_id": "a0a5Y00000hpTcsQAE"
      },
      {
        "region_id": 12,
        "city_id": 41,
        "name": "PRIMAVERA",
        "sf_id": "a0a5Y00000hpTcuQAE"
      },
      {
        "region_id": 12,
        "city_id": 41,
        "name": "TIMAUKEL",
        "sf_id": "a0a5Y00000hpTc8QAE"
      },
      {
        "region_id": 12,
        "city_id": 42,
        "name": "NATALES",
        "sf_id": "a0a5Y00000hpTaMQAU"
      },
      {
        "region_id": 12,
        "city_id": 42,
        "name": "TORRES DEL PAINE",
        "sf_id": "a0a5Y00000hpTcDQAU"
      },
      {
        "region_id": 13,
        "city_id": 43,
        "name": "COLINA",
        "sf_id": "a0a5Y00000hpTbLQAU"
      },
      {
        "region_id": 13,
        "city_id": 43,
        "name": "LAMPA",
        "sf_id": "a0a5Y00000hpTalQAE"
      },
      {
        "region_id": 13,
        "city_id": 43,
        "name": "TILTIL",
        "sf_id": "a0a5Y00000hpTc7QAE"
      },
      {
        "region_id": 13,
        "city_id": 44,
        "name": "PIRQUE",
        "sf_id": "a0a5Y00000hpTcoQAE"
      },
      {
        "region_id": 13,
        "city_id": 44,
        "name": "PUENTE ALTO",
        "sf_id": "a0a5Y00000hpTczQAE"
      },
      {
        "region_id": 13,
        "city_id": 44,
        "name": "SAN JOSE DE MAIPO",
        "sf_id": "a0a5Y00000hpTbiQAE"
      },
      {
        "region_id": 13,
        "city_id": 45,
        "name": "BUIN",
        "sf_id": "a0a5Y00000hpTeRQAU"
      },
      {
        "region_id": 13,
        "city_id": 45,
        "name": "CALERA DE TANGO",
        "sf_id": "a0a5Y00000hpTeaQAE"
      },
      {
        "region_id": 13,
        "city_id": 45,
        "name": "PAINE",
        "sf_id": "a0a5Y00000hpTacQAE"
      },
      {
        "region_id": 13,
        "city_id": 45,
        "name": "SAN BERNARDO",
        "sf_id": "a0a5Y00000hpTdeQAE"
      },
      {
        "region_id": 13,
        "city_id": 46,
        "name": "ALHUE",
        "sf_id": "a0a5Y00000hpTeEQAU"
      },
      {
        "region_id": 13,
        "city_id": 46,
        "name": "CURACAVI",
        "sf_id": "a0a5Y00000hpTbbQAE"
      },
      {
        "region_id": 13,
        "city_id": 46,
        "name": "MARIA PINTO",
        "sf_id": "a0a5Y00000hpTfjQAE"
      },
      {
        "region_id": 13,
        "city_id": 46,
        "name": "MELIPILLA",
        "sf_id": "a0a5Y00000hpTaFQAU"
      },
      {
        "region_id": 13,
        "city_id": 46,
        "name": "SAN PEDRO",
        "sf_id": "a0a5Y00000hpTbnQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "CERRILLOS",
        "sf_id": "a0a5Y00000hpTelQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "CERRO NAVIA",
        "sf_id": "a0a5Y00000hpTemQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "CONCHALI",
        "sf_id": "a0a5Y00000hpTbQQAU"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "EL BOSQUE",
        "sf_id": "a0a5Y00000hpTdIQAU"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "ESTACION CENTRAL",
        "sf_id": "a0a5Y00000hpTdPQAU"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "HUECHURABA",
        "sf_id": "a0a5Y00000hpTe0QAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "INDEPENDENCIA",
        "sf_id": "a0a5Y00000hpTe2QAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LA CISTERNA",
        "sf_id": "a0a5Y00000hpTeoQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LA FLORIDA",
        "sf_id": "a0a5Y00000hpTerQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LA GRANJA",
        "sf_id": "a0a5Y00000hpTesQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LA PINTANA",
        "sf_id": "a0a5Y00000hpTdrQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LA REINA",
        "sf_id": "a0a5Y00000hpTdsQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LAS CONDES",
        "sf_id": "a0a5Y00000hpTaoQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LO BARNECHEA",
        "sf_id": "a0a5Y00000hpTaxQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LO ESPEJO",
        "sf_id": "a0a5Y00000hpTayQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "LO PRADO",
        "sf_id": "a0a5Y00000hpTazQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "MACUL",
        "sf_id": "a0a5Y00000hpTbDQAU"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "MAIPU",
        "sf_id": "a0a5Y00000hpTfeQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "ÑUÑOA",
        "sf_id": "a0a5Y00000hpTaSQAU"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "PEDRO AGUIRRE CERDA",
        "sf_id": "a0a5Y00000hpTfMQAU"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "PEÑALOLEN",
        "sf_id": "a0a5Y00000hpTcdQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "PROVIDENCIA",
        "sf_id": "a0a5Y00000hpTcvQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "PUDAHUEL",
        "sf_id": "a0a5Y00000hpTcyQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "QUILICURA",
        "sf_id": "a0a5Y00000hpTetQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "QUINTA NORMAL",
        "sf_id": "a0a5Y00000hpTf1QAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "RECOLETA",
        "sf_id": "a0a5Y00000hpTf7QAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "RENCA",
        "sf_id": "a0a5Y00000hpTf9QAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "SAN JOAQUIN",
        "sf_id": "a0a5Y00000hpTbhQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "SAN MIGUEL",
        "sf_id": "a0a5Y00000hpTbkQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "SAN RAMON",
        "sf_id": "a0a5Y00000hpTbrQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "SANTIAGO",
        "sf_id": "a0a5Y00000hpTbwQAE"
      },
      {
        "region_id": 13,
        "city_id": 47,
        "name": "VITACURA",
        "sf_id": "a0a5Y00000hpTcVQAU"
      },
      {
        "region_id": 13,
        "city_id": 48,
        "name": "EL MONTE",
        "sf_id": "a0a5Y00000hpTdKQAU"
      },
      {
        "region_id": 13,
        "city_id": 48,
        "name": "ISLA DE MAIPO",
        "sf_id": "a0a5Y00000hpTe4QAE"
      },
      {
        "region_id": 13,
        "city_id": 48,
        "name": "PADRE HURTADO",
        "sf_id": "a0a5Y00000hpTaYQAU"
      },
      {
        "region_id": 13,
        "city_id": 48,
        "name": "PEÑAFLOR",
        "sf_id": "a0a5Y00000hpTccQAE"
      },
      {
        "region_id": 13,
        "city_id": 48,
        "name": "TALAGANTE",
        "sf_id": "a0a5Y00000hpTbzQAE"
      },
      {
        "region_id": 14,
        "city_id": 49,
        "name": "FUTRONO",
        "sf_id": "a0a5Y00000hpTdWQAU"
      },
      {
        "region_id": 14,
        "city_id": 49,
        "name": "LA UNION",
        "sf_id": "a0a5Y00000hpTduQAE"
      },
      {
        "region_id": 14,
        "city_id": 49,
        "name": "LAGO RANCO",
        "sf_id": "a0a5Y00000hpTdvQAE"
      },
      {
        "region_id": 14,
        "city_id": 49,
        "name": "RIO BUENO",
        "sf_id": "a0a5Y00000hpTfEQAU"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "CORRAL",
        "sf_id": "a0a5Y00000hpTbXQAU"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "LANCO",
        "sf_id": "a0a5Y00000hpTamQAE"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "LOS LAGOS",
        "sf_id": "a0a5Y00000hpTb6QAE"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "MAFIL",
        "sf_id": "a0a5Y00000hpTfdQAE"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "MARIQUINA",
        "sf_id": "a0a5Y00000hpTfkQAE"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "PAILLACO",
        "sf_id": "a0a5Y00000hpTabQAE"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "PANGUIPULLI",
        "sf_id": "a0a5Y00000hpTe8QAE"
      },
      {
        "region_id": 14,
        "city_id": 50,
        "name": "VALDIVIA",
        "sf_id": "a0a5Y00000hpTcIQAU"
      },
      {
        "region_id": 15,
        "city_id": 51,
        "name": "ARICA",
        "sf_id": "a0a5Y00000hpTePQAU"
      },
      {
        "region_id": 15,
        "city_id": 51,
        "name": "CAMARONES",
        "sf_id": "a0a5Y00000hpTecQAE"
      },
      {
        "region_id": 15,
        "city_id": 52,
        "name": "GENERAL LAGOS",
        "sf_id": "a0a5Y00000hpTdYQAU"
      },
      {
        "region_id": 15,
        "city_id": 52,
        "name": "PUTRE",
        "sf_id": "a0a5Y00000hpTdAQAU"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "BULNES",
        "sf_id": "a0a5Y00000hpTeSQAU"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "CHILLAN",
        "sf_id": "a0a5Y00000hpTfUQAU"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "CHILLAN VIEJO",
        "sf_id": "a0a5Y00000hpTfVQAU"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "EL CARMEN",
        "sf_id": "a0a5Y00000hpTdJQAU"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "PEMUCO",
        "sf_id": "a0a5Y00000hpTcbQAE"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "PINTO",
        "sf_id": "a0a5Y00000hpTcnQAE"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "QUILLON",
        "sf_id": "a0a5Y00000hpTewQAE"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "SAN IGNACIO",
        "sf_id": "a0a5Y00000hpTdnQAE"
      },
      {
        "region_id": 16,
        "city_id": 53,
        "name": "YUNGAY",
        "sf_id": "a0a5Y00000hpTcYQAU"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "COBQUECURA",
        "sf_id": "a0a5Y00000hpTfaQAE"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "COELEMU",
        "sf_id": "a0a5Y00000hpTbGQAU"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "NINHUE",
        "sf_id": "a0a5Y00000hpTaPQAU"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "PORTEZUELO",
        "sf_id": "a0a5Y00000hpTcrQAE"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "QUIRIHUE",
        "sf_id": "a0a5Y00000hpTf3QAE"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "RANQUIL",
        "sf_id": "a0a5Y00000hpTf5QAE"
      },
      {
        "region_id": 16,
        "city_id": 54,
        "name": "TREHUACO",
        "sf_id": "a0a5Y00000hpTcGQAU"
      },
      {
        "region_id": 16,
        "city_id": 55,
        "name": "COIHUECO",
        "sf_id": "a0a5Y00000hpTbHQAU"
      },
      {
        "region_id": 16,
        "city_id": 55,
        "name": "ÑIQUEN",
        "sf_id": "a0a5Y00000hpTbEQAU"
      },
      {
        "region_id": 16,
        "city_id": 55,
        "name": "SAN CARLOS",
        "sf_id": "a0a5Y00000hpTdfQAE"
      },
      {
        "region_id": 16,
        "city_id": 55,
        "name": "SAN FABIAN",
        "sf_id": "a0a5Y00000hpTdiQAE"
      },
      {
        "region_id": 16,
        "city_id": 55,
        "name": "SAN NICOLAS",
        "sf_id": "a0a5Y00000hpTblQAE"
      }
   ],
   // headquarters:[],
   headquarters:[
      { id: 1, label: "Arica" ,value: "arica" },
      { id: 2, label: "Iquique" ,value: "iquique" },
      { id: 3, label: "Antofagasta" ,value: "antofagasta" },
      { id: 4, label: "Calama" ,value: "calama" },
      { id: 5, label: "Copiapó" ,value: "copiapo" },
      { id: 6, label: "La Serena" ,value: "la-serena" },
      { id: 7, label: "Coquimbo" ,value: "coquimbo" },
      { id: 8, label: "Ovalle" ,value: "ovalle" },
   ],
   academicLevels: [
      { id: 1, label: "Pre-Kinder" },
      { id: 2, label: "1° Básico"  },
      { id: 3, label: "2° Básico"  },
      { id: 4, label: "3° Básico"  },
      { id: 5, label: "4° Básico"  },
      { id: 6, label: "5° Básico"  },
      { id: 7, label: "6° Básico"  },
      { id: 8, label: "7° Básico"  },
      { id: 9, label: "8° Básico"  },
      { id: 10, label: "1° Medio"  },
      { id: 11, label: "2° Medio"  },
      { id: 12, label: "3° Medio"  },
      { id: 13, label: "4° Medio"  }
   ],
   relations:[
      { id: 1 , label: "Padre" },
      { id: 2 , label: "Madre" },
      { id: 3 , label: "Padrastro" },
      { id: 4 , label: "Madrastra" },
      { id: 5 , label: "Hermano/a" },
      { id: 6 , label: "Abuelo/a" },
      { id: 7 , label: "Tío/a" },
      { id: 8 , label: "Otro" }
   ],
   modalitiesAttention: [
      { id: 1 , label: "Sala Cama" },
      { id: 2 , label: "Hospital" },
      { id: 3 , label: "Domicilio" }
   ],
   aulaActive:""
}

export const useGlobalStore = defineStore('global', {
   state: () => initialState,
   getters: {  },
   actions: {
      //Sedes
      async GET_ALL_HEADQUARTERS() {
         // console.log("Kiub");
         // fetch(this.apiURL+'api/administrativo/sedes',{
         //    headers:{
         //             "Access-Control-Allow-Origin": "*",
         //             "Content-Type": "application/json"
         //          }
         // })
         // .then(response => response.json())
         // .then(data => console.log(data));
         try {
            axios.get(this.apiURL+'api/administrativo/sedes',{
               headers:{
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json"
               }
            }).then(resp =>{
               // console.log("GET_ALL_HEADQUARTERS",resp);
            }).catch(e =>{
               // console.log(e);
            });
         } catch (error) {
            console.log("catch",e);
         }
      },
      async GET_HEADQUARTERS_BY_ID(id) {
         try {
            axios.get(`${this.apiURL}/administrativo/sedes/${id}`).then(resp =>{
               // console.log(resp);
            }).catch(e =>{
               // console.log(e);
            });
         } catch (error) {

         }
      },
      async GET_ALL_REGIONS() {
         try {
            axios.get(`${this.apiURL}/registro/regiones/`).then(resp =>{
               // console.log(resp);
            }).catch(e =>{
               // console.log(e);
            });
         } catch (error) {

         }
      },
      async GET_COMMUNE_BY_REGION(id_region) {
         try {
            axios.get(`${this.apiURL}/registro/comunas/${id_region}`).then(resp =>{
               // console.log(resp);
            }).catch(e =>{
               // console.log(e);
            });
         } catch (error) {

         }
      },
      async GET_ALL_COMMUNES() {
         try {
            axios.get(this.apiURL).then(resp =>{
               // console.log(resp);
            }).catch(e =>{
               // console.log(e);
            });
         } catch (error) {

         }
      },
   },
});
