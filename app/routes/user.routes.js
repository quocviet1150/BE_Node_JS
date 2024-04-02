module.exports = app => {
    const userController = require('../controllers/user.controller')

    app.route('/user')
        .post(userController.create)
        .get(userController.read)

    app.route('/user/:id')
        .put(userController.update)
        .delete(userController.delete)
        .get(userController.readById)
}