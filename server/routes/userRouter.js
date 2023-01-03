const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController')
const authMw = require('../middleware/authMw');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMw, userController.check);
/*
router.get('/auth',(req, res) => {
    res.status(200).json({message: 'Auth working!!!' });
});
*/

module.exports = router;