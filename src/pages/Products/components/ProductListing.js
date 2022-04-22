import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions'
import CircularProgress from '@mui/material/CircularProgress'

import Products from './Products'
import {StyledProductListing, LoadingContainer} from '../styles/StyledProductListing'
const ProductListing = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(actions.setProductsRequest())
  }, [])

  let content = <Products />

  if (products.loading) {
    content = (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    )
  } else if (products.error) {
    content = <h3>{products.error}</h3>
  }

  return <StyledProductListing>{content}</StyledProductListing>
}

export default ProductListing

