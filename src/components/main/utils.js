import {randProduct} from "@ngneat/falso"

let productosIniciales = []

for (let i = 0; i < 10; i++) {
    productosIniciales.push(randProduct())
}

const generatePromise = (operation,time = 2000) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(operation)
        }, time)
    })
}

export const getProducts = () => generatePromise(productosIniciales)

export const getProductByCategoryId = (id) => generatePromise(productosIniciales.filter(item=>item.category === id))
export const getProductByProductId = (id) => generatePromise(productosIniciales.find(item=>item.id === id))