import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'

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
  const products = useSelector((state) => state.products.products)

  const content = products.map((prod) => {
    const { title, image, id, price } = prod
    return (
      <LinkContainer key={id}>
        <DeleteIcon onClick={() => dispatch(actions.deleteProduct(id))} />
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
