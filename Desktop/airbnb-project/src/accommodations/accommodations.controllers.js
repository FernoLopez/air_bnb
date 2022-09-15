const Accommodations = require("../models/accommodations.model");
const Places = require("../models/places.model");
const Users = require("../models/user.model");
const uuid = require('uuid');
const { UUIDV4 } = require("sequelize");

const getAllAccommodations = async () => {
  const data = await Accommodations.findAll({
    include: [
        {
            model: Places,
            
        },
        {
          model: Users,
          as: 'user'
        },
    ],
    // attributes: {
    //   exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    // },
  });

  // const data = await Users.findAll({
  //     include: {
  //         model: Accommodations,
  //         include: {
  //             model: Places,
  //             attributes:{
  //                 exclude: ['createdAt', 'updatedAt']
  //             }
  //         }
  //     }
  // })
  return data;
};

const getAccommodationById = async (id) => {
  const data = await Accommodations.findOne({
    where: {
      id,
    },
    include:[ {
      model: Places,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },{
      model: Users,
      as: 'user',
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    }
  ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
  });
  return data;
};

const createAccommodation = async(data) => {
  const {...restOfData} = data
  const newAccommodation = await Accommodations.create({
    ...restOfData,
    id: uuid.v4(),
    hostId: "b472ae12-f8be-4fdf-ab5e-96a6d6751bab",
    placeId: "7994c654-2329-4818-8c7a-b383de9ed5a2",
    });
  return newAccommodation;
};

const updateAccommodations = async (accommodationId, data) => {
  const {id, score, ...restOfProperties} = data

    const response = await Accommodations.update(restOfProperties, {
        where: {
          id: accommodationId
        }
    })
    return response
}

const deleteAccommodations = async (id) => {
  const response = await Accommodations.destroy({
    where: {
      id: id
    }
  })
  return response
}

module.exports = {
  getAllAccommodations,
  getAccommodationById,
  createAccommodation,
  updateAccommodations,
  deleteAccommodations
};