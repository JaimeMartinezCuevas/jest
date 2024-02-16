const {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
} = require('./product')

describe('Adding Products', () => {
    beforeEach(() => {
        resetProducts()
    })

    test('should add a product', () => {
        const product = addProduct('Test Product', 10.99)
        expect(product).toEqual({ id: 0, name: 'Test Product', price: 10.99 })
    })

    test('should fail when adding a repeated product', () => {
        addProduct('Test Product', 10.99)
        expect(() => addProduct('Test Product', 20.99)).toThrow('Product with the same name already exists.')
    })

    test('should fail when adding a product with no name', () => {
        expect(() => addProduct(undefined, 10.99)).toThrow('Both name and price must be defined.')
    })

    test('should fail when adding a product with no price', () => {
        expect(() => addProduct('Test Product', undefined)).toThrow('Both name and price must be defined.')
    })
})

describe('Removing Products', () => {
    beforeEach(() => {
        resetProducts()
    })

    test('should remove a product', () => {
        addProduct('Test Product', 10.99)
        removeProduct(0);
        expect(getProducts()).toEqual([])
    })

    test('should fail when removing a product that does not exist', () => {
        expect(() => removeProduct(0)).toThrow('Product not found.')
    })
})

describe('Getting a single product', () => {
    beforeEach(() => {
        resetProducts()
    })

    test('should get a product', () => {
        addProduct('Test Product', 10.99)
        const product = getProduct(0)
        expect(product).toEqual({ id: 0, name: 'Test Product', price: 10.99 })
    })

    test('should fail when getting a product that does not exist', () => {
        expect(() => getProduct(0)).toThrow('Product not found.')
    })
})

describe('Updating Products', () => {
    beforeEach(() => {
        resetProducts()
    })

    test('should update a product', () => {
        addProduct('Test Product', 10.99)
        const updatedProduct = updateProduct(0, 'Updated Product', 15.99)
        expect(updatedProduct).toEqual({ id: 0, name: 'Updated Product', price: 15.99 })
    })

    test('should fail when updating a product that does not exist', () => {
        expect(() => updateProduct(0, 'Updated Product', 15.99)).toThrow('Product not found.')
    })

    test('should only update the price', () => {
        addProduct('Test Product', 10.99)
        const updatedProduct = updateProduct(0, undefined, 15.99)
        expect(updatedProduct).toEqual({ id: 0, name: 'Test Product', price: 15.99 })
    })

    test('should only update the name', () => {
        addProduct('Test Product', 10.99)
        const updatedProduct = updateProduct(0, 'Updated Product')
        expect(updatedProduct).toEqual({ id: 0, name: 'Updated Product', price: 10.99 })
    })
})