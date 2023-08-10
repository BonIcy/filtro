let jwt = require ('jsonwebtoken');

let generateJWT =  (uid= '') =>{
    return new Promise ((resolve, reject)=>{
        let payload = {uid};
        jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY, {
            expiresIn : '2h'
        }, (err, token)=>{
            if (err){
                console.log(err);
                reject ('error al generar el jwt')
            } else {
                resolve (token)
            }
        })
    })
}
module.exports = {
    generateJWT
}