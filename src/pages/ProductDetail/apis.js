import cts from '../../crud/cts'

export const fetchProductDetails = async (productId) =>
  cts('get', `/products/${productId}`)
