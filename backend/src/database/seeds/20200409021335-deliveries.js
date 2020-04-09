module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "deliveries",
      [
        {
          product: "Espada de Tandera",
          deliveryman_id: 1,
          recipient_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product: "Chapéu de palha",
          deliveryman_id: 2,
          recipient_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product: "Cogumelo verde",
          deliveryman_id: 1,
          recipient_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product: "Corrente de andromeda",
          deliveryman_id: 2,
          recipient_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product: "Rasengan",
          deliveryman_id: 1,
          recipient_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
