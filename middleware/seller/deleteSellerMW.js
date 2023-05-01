/**
 * Deletes a seller from the database, the entity used here is: res.locals.seller
 * Redirects to /sellers after delete
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.seller === 'undefined') {
            return next();
        }

        res.locals.seller.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/sellers');
        });
    };
};
