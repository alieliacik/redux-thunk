import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import StarIcon from '@mui/icons-material/Star'

import * as actions from '../redux/actions'
import * as sharedActions from '../../redux/actions'

import {
  StyledProductDetails,
  Title,
  Category,
  Image,
  Description,
  Price,
  DetailsContainer,
} from '../styles/StyledProductDetails'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const productDetails = useSelector((state) => state.productDetails)
  const favs = useSelector((state) => state.shared.favs)

  useEffect(() => {
    dispatch(actions.setProductDetailsRequest(productId))
  }, [])

  let content = (
    <DetailsContainer isFav={favs.includes(+productId)}>
      <Title>{productDetails.selectedProduct.title}</Title>
      <Category>Category: {productDetails.selectedProduct.category}</Category>
      <Image src={productDetails.selectedProduct.image} />
      <Description>{productDetails.selectedProduct.description}</Description>
      <Price>${productDetails.selectedProduct.price}</Price>
      <StarIcon
        onClick={() => dispatch(sharedActions.toggleFavorite(+productId))}
      />
    </DetailsContainer>
  )

  if (productDetails.loading) {
    content = <CircularProgress />
  } else if (productDetails.error) {
    content = <h3>{productDetails.error}</h3>
  }

  return <StyledProductDetails>{content}</StyledProductDetails>
}

export default ProductDetails
