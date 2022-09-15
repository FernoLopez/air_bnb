const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const Users = require ('../models/user.model')
const Roles = require ('../models/roles.model')

const userDB = [{
  id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
  first_name: "Sahid",
  last_name: "Kick",
  email: "sahid.kick@academlo.com",
  password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
  phone: "1234567890",
  birthday_date: "2000/10/22",
  dni: "",
  address: "",
  rol: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
  profile_image: "",
  status: "active",
  verified: false
}];

const getAllUsers = async() => {
  const data = await Users.findAll({
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    },
  })
  return data;
  //? select * from users;
};

const getUserById = async(id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    }
  });
  return data;
  //? select * from users where id = ${id};
};

const createUser = async(data) => {
  const newUser = await Users.create({
    id: uuid.v4(), //obligatorio y unico
    first_name: data.first_name, //obligatorio
    last_name: data.last_name, //obligatorio
    email: data.email, //obligatorio y unico
    password: hashPassword(data.password), //obligatorio
    phone: data.phone ? data.phone : "", //unico
    birthday_date: data.birthday_date, //obligatorio
    dni: data.dni,
    role_id: "17575829-067c-47ed-9456-31169d02bec2", 
    address: data.address,
    profile_image: data.profile_image,
    status: active, //obligatorio y por defecto true
    verified: false, //obligatorio y por defecto false
  });
  return newUser;
};

const editUser = async (userId, data, userRol) => {
  const { id, password, verified, role_id, ...restOfProperties } = data;
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {
    const response = await Users.update(
      { ...restOfProperties, role_id },
      { where: { id: userId } }
    );
    return response;
  } else {
    const response = await Users.update(restOfProperties, {
      where: { id: userId },
    });
    return response;
  }
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: { email },
    attributes: {
      exclude: ["createdAt", "updatedAt", "roleId"],
    },
  });
  return data;
  //? select * from users where email = ${email};
};

const editProfileImg = async (userID, imgUrl) => {
  const data = await Users.update(
    {
      profileImage: imgUrl,
    },
    {
      where: { id: userID },
    }
  );
  return data;
};

const getUserWithRole = async (userId) => {
  const data = await Users.findOne({
    where: {
      id: userId,
    },
    include: {
      model: Roles,
      as: "role",
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["roleId", "createdAt", "updatedAt"],
    },
  });
  return data;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserByEmail,
  editProfileImg,
  getUserWithRole
}