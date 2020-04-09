module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "delivery_problems",
      [
        {
         description: "Pessoa estava jogando cadeiras pro alto",
         delivery_id: 1,
         created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "Muita água no caminho, atrapalhou.",
          delivery_id: 2,
          created_at: new Date(),
          updated_at: new Date()
         },
        {
          description: "Goku me assaltou!",
          delivery_id: 3,
          created_at: new Date(),
          updated_at: new Date()
         }
      ],
      {}
    );
  },

  down: () => {}
};
