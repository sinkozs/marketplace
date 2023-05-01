/**
 * Using POST params update or save a product to the database
 * If res.locals.product already exists update it, otherwise
 * this middleware creates an entity
 * Redirects to /products/:sellerid  after success
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    const ProductModel = requireOption(objectrepository, 'ProductModel');

    return function(req, res, next) {
        if (
            typeof req.body.name  === 'undefined' ||
            typeof req.body.price === 'undefined' ||
            typeof req.body.description === 'undefined' ||
            typeof req.body.category === 'undefined' ||
            typeof req.body.img_path  === 'undefined' ||
            typeof res.locals.seller === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.product === 'undefined') {
            res.locals.product= new ProductModel();
        }

        res.locals.product.name = req.body.name;
        res.locals.product.price = req.body.price;
        res.locals.product.description = req.body.description;
        res.locals.product.category = req.body.category;
        res.locals.product.img_path  = req.body.img_path;
        res.locals.befott._owner = res.locals.seller._id;

        res.locals.product.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/products/${res.locals.seller._id}`);
        });
    };
};
