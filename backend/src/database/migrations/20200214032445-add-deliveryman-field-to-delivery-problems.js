module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('delivery_problems', 'order_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'orders',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: queryInterface => queryInterface.removeColumn('delivery_problems', 'order_id'),
};
