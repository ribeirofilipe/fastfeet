module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "deliverymans",
      [
        {
          name: "Goku Silva",
          email: "kakaroto@gmail.com",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Vegeta Maradona",
          email: "vegetinha@gmail.com",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Piccolo Ratimbum",
          email: "abacate@gmail.com",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Gohan Bundao",
          email: "fracote@gmail.com",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Mestre Kaio",
          email: "hentai@gmail.com",
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },

  down: () => {}
};
