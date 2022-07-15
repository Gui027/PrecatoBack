const jwt = require('jsonwebtoken');

const SECRET = '12345';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = (data) => {
    const payload = {
        user: data,
    }; 

    const token = jwt.sign(payload, SECRET, jwtConfig);
    
    return token;
};

module.exports = {
    generateToken,
};