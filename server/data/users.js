import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    contact: "0973646230",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    contact: "0953531099",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
