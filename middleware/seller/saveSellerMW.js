/**
 * Using POST params update or save a seller to the database
 * If res.locals.seller already exists update it, otherwise
 * this middleware creates an entity
 * Redirects to /sellers after success
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    const SellerModel = requireOption(objectrepository, 'SellerModel');

    return function(req, res, next) {
        if (
            typeof req.body.firstName === 'undefined' ||
            typeof req.body.lastName=== 'undefined' ||
            typeof req.body.mobile === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.seller === 'undefined') {
            res.locals.seller = new SellerModel();
        }

        res.locals.seller.firstName = req.body.firstName;
        res.locals.seller.lastName = req.body.lastName;
        res.locals.seller.mobile = req.body.mobile;

        res.locals.seller.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/sellers');
        });
    };
};
