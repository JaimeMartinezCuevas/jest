let products = []
let id = 0

function resetProducts() {
    products = []
    id = 0
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Both name and price must be defined.')
    }

    if (products.some(product => product.name === name)) {
        throw new Error('Product with the same name already exists.')
    }

    const product = { id: id++, name, price }
    products.push(product)
    return product
}

function removeProduct(productId) {
    const index = products.findIndex(product => product.id === productId)

    if (index === -1) {
        throw new Error('Product not found.')
    }

    products.splice(index, 1)
}

function getProducts() {
    return products
}

function getProduct(productId) {
    const product = products.find(product => product.id === productId)

    if (!product) {
        throw new Error('Product not found.')
    }

    return product
}

function updateProduct(productId, name, price) {
    const productIndex = products.findIndex(product => product.id === productId)

    if (productIndex === -1) {
        throw new Error('Product not found.')
    }

    if (name) {
        products[productIndex].name = name
    }

    if (price) {
        products[productIndex].price = price
    }

    return products[productIndex]
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
};