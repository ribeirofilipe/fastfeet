module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('orders', 'recipient_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'recipients',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: queryInterface => queryInterface.removeColumn('orders', 'recipient_id'),
};
