const jwt=require('jsonwebtoken')
const createToken = (userobj) => {
    // Payload to be signed into the token
    const payload =userobj

    // Sign the payload with a secret key to generate the token
    const token = jwt.sign(payload, '12345', {
        expiresIn: '3h' // Token expiry time
    });

    return token;
};

module.exports=createToken