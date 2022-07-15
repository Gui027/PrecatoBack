
module.exports = message_flow = (sequelize, DataTypes) => {
  const message_flow = sequelize.define("message_flow", {
    template_name: DataTypes.TEXT,
    position: DataTypes.INTEGER
  });

  return message_flow;
};