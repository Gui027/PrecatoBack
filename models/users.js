module.exports = users = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  
  return users;
};