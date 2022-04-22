import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'

import * as actions from '../redux/actions'

import {
  StyledProducts,
  LinkContainer,
  Title,
  Price,
  Image,
} from '../styles/StyledProducts'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  const content = products.products.map((prod) => {
    const { title, image, id, price } = prod
    return (
      <LinkContainer key={id} isFav={products.favs.includes(id)}>
        <StarIcon onClick={() => dispatch(actions.toggleFavorite(id))} />
        <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
          <Image src={image} />
          <Title>{title}</Title>
          <Price>${price}</Price>
        </Link>
      </LinkContainer>
    )
  })
  return <StyledProducts>{content}</StyledProducts>
}

export default Products
