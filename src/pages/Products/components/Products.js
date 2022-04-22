import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'

import * as sharedActions from '../../redux/actions'

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
  const favs = useSelector((state) => state.shared.favs)

  const content = products.products.map((prod) => {
    const { title, image, id, price } = prod
    return (
      <LinkContainer key={id} isFav={favs.includes(id)}>
        <StarIcon onClick={() => dispatch(sharedActions.toggleFavorite(id))} />
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
