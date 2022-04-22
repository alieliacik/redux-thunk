import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as actions from '../redux/actions'
import CircularProgress from '@mui/material/CircularProgress'
import {
  StyledProductDetails,
  Title,
  Category,
  Image,
  Description,
  Price,
} from '../styles/StyledProductDetails'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const productData = useSelector((state) => state.productDetails)

  useEffect(() => {
    dispatch(actions.setProductDetailsRequest(productId))
  }, [])

  let content = (
    <>
      <Title>{productData.selectedProduct.title}</Title>
      <Category>Category: {productData.selectedProduct.category}</Category>
      <Image src={productData.selectedProduct.image} />
      <Description>{productData.selectedProduct.description}</Description>
      <Price>${productData.selectedProduct.price}</Price>
    </>
  )

  if (productData.loading) {
    content = <CircularProgress />
  } else if (productData.error) {
    content = <h3>{productData.error}</h3>
  }

  return <StyledProductDetails>{content}</StyledProductDetails>
}

export default ProductDetail
