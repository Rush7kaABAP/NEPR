const jwt = require('jsonwebtoken');

module.exports = function(role) {
    return function(req, res, next) {
        if (req.method === 'OPTION'){
            next()
        }
        try {
            // [0] elemnt - token type        
            const token = req.headers.authorization.split(' ')[1]; //Bearer JKJKLJljk
            if (!token) {
                return res.status(402).json({message: "User not authorized."});
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({message: "No access."});
            }
            req.user = decoded;
            next();
        } catch (e) {
            res.status(402).json({message: "User not authorized."});
        }
    }
}
