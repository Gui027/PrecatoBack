module.exports = subscriptions = (sequelize, DataTypes) => {
  const subscriptions = sequelize.define("subscriptions", {
    subscription_date: DataTypes.DATE,
    name: DataTypes.TEXT,
    last_message: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  });

  return subscriptions;
};