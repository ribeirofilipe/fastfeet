module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('deliveries', 'recipient_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'recipients',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: queryInterface => queryInterface.removeColumn('deliveries', 'recipient_id'),
};
