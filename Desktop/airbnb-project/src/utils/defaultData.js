const Users = require ('../models/user.model')
const Roles = require ('../models/roles.model')
const Accommodations = require ('../models/accommodations.model')
const Places = require ('../models/places.model')
const Accommodation_images = require ('../models/accommodation_images.model')
const Reservations = require ('../models/reservations.model')
const Users_images = require ('../models/user_images.model') 

const generateData = async() =>{
    await Roles.bulkCreate([{name:'guest', id:"54ab27c6-b477-43fc-9eee-c5b915d14d09"}, {name: "host", id: "b472ae12-f8be-4fdf-ab5e-96a6d6751bab"}, {name: "admin", id: "17575829-067c-47ed-9456-31169d02bec2"}], {validate: true})
    await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "sahid.kick@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2000/10/22",
    dni: "",
    address: "",
    roleId: "17575829-067c-47ed-9456-31169d02bec2",
    profileImage: "omd.com",
    status: "active",
    verified: false
})
await Places.bulkCreate([
    {
      id: '818e4b0a-ebf7-4c94-9eb2-a9ea5270352f',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: 'db765ffc-1764-4af2-9964-e503559272fd',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '7994c654-2329-4818-8c7a-b383de9ed5a2',
      city: 'Bogotá',
      state: 'Cundinamarca',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: 'c77956b7-c13a-4d18-8bd3-4881e4c4880c',
      city: 'Medellín',
      state: 'Antioquia',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '5b2beaeb-ed47-4d8b-9130-7491d6294321',
      city: 'Azcapotzalco',
      state: 'CDMX',
      country: 'México',
      continent: 'America'
    },
    {
      id: 'b96dbb66-77cc-4df2-b3b9-23caac4cda5b',
      city: 'Monterrey',
      state: 'Muevo León',
      country: 'México',
      continent: 'America'
    },
  ])
   /* await Accommodations.create({
     id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
     title: "premium - vistas 360 ciudad (alberca y gym)",
     description: "asd",
     guests: 6,
     rooms: 3,
     beds: 3,
     bathrooms: 4.5,
     price: 1536.00,
     hostId : '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
     score: 0.00,
     placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
     commision: 150.00
   }) */
}


module.exports = generateData