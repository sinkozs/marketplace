const renderMW = require('../middleware/renderMW');
const getSellerMW = require('../middleware/seller/getSellerMW');
const getSellerListMW = require('../middleware/seller/getSellerListMW');
const saveSellerMW = require('../middleware/seller/saveSellerMW');
const deleteSellerMW = require('../middleware/seller/deleteSellerMW');
const getProductListMW = require('../middleware/product/getProductListMW');
const getProductMW = require('../middleware/product/getProductMW');
const saveProductMW = require('../middleware/product/saveProductMW');
const deleteProductMW = require('../middleware/product/deleteProductMW');

// const SellerModel = require('../models/seller');
// const ProductModel = require('../models/product');

module.exports = function(app) {
    const objRepo = {};
    // const objRepo = {
    //     SellerModel: SellerModel,
    //     ProductModel: ProductModel
    // };

    // app.use(
    //     '/seller/new',
    //     // saveSellerMW(objRepo),
    //     renderMW(objRepo, 'add-edit-seller')
    // );
    // app.use(
    //     '/seller/edit/:sellerid',
    //     // getSellerMW (objRepo),
    //     // saveSellerMW(objRepo),
    //     renderMW(objRepo, 'add-edit-seller')
    // );

    // app.get(
    //     '/seller/delete/:sellerid',
    //     // getSellerMW (objRepo),
    //     // deleteSellerMW(objRepo)
    // );

    // app.use(
    //     '/product/new',
    //     // getSellerMW(objRepo),
    //     // saveProductMW(objRepo),
    //     renderMW(objRepo, 'add-product')
    // );
    // app.use(
    //     '/product/:sellerid/edit/:productid',
    //     // getSellerMW(objRepo),
    //     // getProductMW(objRepo),
    //     // saveProductMW(objRepo),
    //     renderMW(objRepo, 'add-edit-product')
    // );
    // app.get(
    //     '/product/:sellerid/delete/:productid',
    //     // getSellerMW(objRepo),
    //     // getProductMW(objRepo),
    //     // deleteProductMW(objRepo),
    //     renderMW(objRepo, 'products')
    // );
    // app.get(
    //     '/product/:sellerid',
    //     // getSellerMW(objRepo),
    //     // getProductListMW(objRepo),
    //     renderMW(objRepo, 'seller-products')
    // );

    app.use(
        '/seller/new',
        // getSellerListMW(objRepo),
        renderMW(objRepo, 'add-edit-seller')
    );

    app.get(
        '/seller',
        // getSellerListMW(objRepo),
        renderMW(objRepo, 'sellers')
    );

    app.use(
        '/product/new',
        // getSellerListMW(objRepo),
        renderMW(objRepo, 'add-product')
    );

    app.get(
        '/product',
        // getSellerListMW(objRepo),
        renderMW(objRepo, 'products')
    );
    
    app.get(
        '/', 
        renderMW(objRepo, 'index')
        );


    // app.use('/', getProductListMW(objRepo), renderMW(objRepo, 'index'));
    
};
