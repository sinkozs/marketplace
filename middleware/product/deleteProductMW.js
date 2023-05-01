/**
 * Deletes a product from the database, the entity used here is: res.locals.product
 * Redirects to /products after delete
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.product === 'undefined') {
            return next();
        }

        res.locals.product.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/products`);
        });
    };
};
