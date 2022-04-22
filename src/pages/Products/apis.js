import cts from '../../crud/cts'

export const fetchProducts = async () => cts('get', '/products')
