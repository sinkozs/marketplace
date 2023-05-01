/**
 * Load a seller from the database (if exists) using the :sellerid param
 * The result is saved to res.locals.seller
 */
// const requireOption = require('../common').requireOption;

module.exports = function(objectrepository) {
    const SellerModel = requireOption(objectrepository, 'SellerModel');

    return function(req, res, next) {

        if (typeof req.param('sellerid') === 'undefined'){
            //Raise Seller not found error
            return next();
        }

        SellerModel.findOne({ id: req.params.sellerid }, (err, seller) => {
            if (err || !seller) {
                return next(err);
            }

            res.locals.seller = seller;
            return next();
        });
    };
};
