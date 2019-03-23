var mainController = {

    indexFunction: function(req, res, next) {
        res.render('index', { title: 'MEAN course' });
    },
    aboutFunction: function(req, res, next) {
        res.render('about', { title: 'About page' });
    }

}

module.exports = mainController;