const products = [
    {product: "Laptop", stock: 70},
    {product: "Printer", stock: 50},
    {product: "Monitor", stock: 100},
    {product: "Television", stock: 0}
]

function checkStockLevels(products){
    let prodStock = 0;

    for (let i = 0; i<products.length; i++){
        if (products[i].stock > 0) {
            console.log(`The ${products[i].product} is In Stock.`);
        }
        else {
            console.log(`The ${products[i].product} is Out of Stock.`);
        }
    }
}
checkStockLevels(products);