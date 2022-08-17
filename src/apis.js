import cts from './crud/cts'

export const fetchProducts = async () => cts('get', 'products')

export const fetchProductDetails = async (productId) =>
  cts('get', `products/${productId}`)
