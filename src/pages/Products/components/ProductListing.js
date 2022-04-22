import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Products from './Products'
import * as actions from '../redux/actions'
import CircularProgress from '@mui/material/CircularProgress'

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

const StyledProductListing = styled.div`
  display: flex;
`

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
