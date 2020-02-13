module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('orders', 'deliveryman_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'deliverymans',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: queryInterface => queryInterface.removeColumn('orders', 'deliveryman_id'),
};
