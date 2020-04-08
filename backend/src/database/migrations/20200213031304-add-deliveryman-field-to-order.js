module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('deliveries', 'deliveryman_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'deliverymans',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: queryInterface => queryInterface.removeColumn('deliveries', 'deliveryman_id'),
};
