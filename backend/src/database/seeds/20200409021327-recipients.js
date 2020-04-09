module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "recipients",
      [
        {
          cpf: "42970044881",
          name: "Monkey D. Luffy",
          street: "Rua Maradona",
          number: "200",
          state: "SP",
          city: "Itatiba",
          postal_code: "13214-140",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          cpf: "42970044882",
          name: "Zoro Pascoal",
          street: "Rua Ronaldinho",
          number: "2200",
          state: "SP",
          city: "Jundiaí",
          postal_code: "13214-140",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          cpf: "42970044883",
          name: "BIG MOM",
          street: "Rua Cakeland",
          number: "3000",
          state: "SP",
          city: "Cake",
          postal_code: "13214-140",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          cpf: "42970044880",
          name: "Kaidou",
          street: "Rua das Feras",
          number: "999999",
          state: "SP",
          city: "PODERTOTAL",
          postal_code: "13214-140",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          cpf: "42970044892",
          name: "Shanks",
          street: "Ruivinho",
          number: "8000",
          state: "SP",
          city: "Laftel",
          postal_code: "13214-140",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
