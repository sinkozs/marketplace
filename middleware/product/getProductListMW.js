/**
 * Load all products from the database
 * The result is saved to res.locals.products
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    const ProductModel = requireOption(objectrepository, 'ProductModel');

    return function(req, res, next) {
        if (typeof res.locals.seller === 'undefined') {
            return next();
        }

        ProductModel.find({ _owner: res.locals.seller._id }, (err, products) => {
            if (err) {
                return next(err);
            }

            res.locals.products = products;
            return next();
        });
    };
};
