function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({ status: 401, message: 'Se necesita autorizacion' });
    }

    if (req.headers.authorization != process.env.APP_KEY) {
        return res.status(401).send({ status: 401, message: 'El token no es valido' });
    }
    return next();
}

module.exports = {
    isAuth
}