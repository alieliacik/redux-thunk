import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as actions from '../redux/actions'
import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const productData = useSelector((state) => state.productReducer)

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

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 30px;
  border-radius: 10px;
`

const Title = styled.h2`
  margin-bottom: 15px;
`
const Price = styled.h3`
  margin: 15px 0;
`

const Image = styled.img`
  height: 180px;
  display: block;
  margin: 0 auto;
`
const Category = styled.h5`
  margin-bottom: 10px;
  text-transform: capitalize;
`

const Description = styled.div`
  font-size: 14px;
  margin: 20px;
`
