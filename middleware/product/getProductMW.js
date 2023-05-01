/**
 * Load a product from the database (if exists)  using the :productid param
 * The result is saved to res.locals.product
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    const ProductModel = requireOption(objectrepository, 'ProductModel');

    return function(req, res, next) {
        if (typeof req.param('productid') === 'undefined'){
            return next();
        }

        ProductModel.findOne(
            {
                _id: req.params.productid
            },
            (err, product) => {
                if (err || !product) {
                    return next(err);
                }

                res.locals.product = product;
                return next();
            }
        );
    };
};
