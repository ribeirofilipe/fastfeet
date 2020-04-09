const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Distribuidora FastFeet",
          email: "admin@fastfeet.com",
          password_hash: bcrypt.hashSync("123456", 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "João Aparecido",
          email: "joao@gmail.com",
          password_hash: bcrypt.hashSync("123456", 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Jonas Felipe",
          email: "jonas@gmail.com",
          password_hash: bcrypt.hashSync("123456", 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Wesley Ferreti",
          email: "wes@gmail.com",
          password_hash: bcrypt.hashSync("123456", 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Danilo Augusto",
          email: "danilo@gmail.com",
          password_hash: bcrypt.hashSync("123456", 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Fernando Guedes",
          email: "guedes@gmail.com",
          password_hash: bcrypt.hashSync("123456", 8),
          provider: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
