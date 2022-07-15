const { users } = require('../models');
const { generateToken } = require('../Auth/jwt');

const UsersController = async (req, res) => {
    const { email, password } = req.body;

    const emailExist = await users.findOne({ where: { email } });

    if (emailExist) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const user = await users.create({ email, password});

    const token = generateToken(user);

    return res.status(201).json({ token });
};

module.exports = UsersController;