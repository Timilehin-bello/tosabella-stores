import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Timmy Doe",
    email: "Timmy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Emmy Doe",
    email: "Emmy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
