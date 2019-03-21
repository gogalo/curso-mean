var userController = {

    usersFunction: function(req, res, next) {
      //res.send('respond with a resource');
      res.render('users', { title: 'Users' });
    }

}

module.exports = userController;