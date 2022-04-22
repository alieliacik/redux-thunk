import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  StyledProducts,
  LinkContainer,
  Title,
  Price,
  Image,
} from '../styles/StyledProducts'

const Products = () => {
  const products = useSelector((state) => state.products.products)

  const content = products.map((prod) => {
    const { title, image, id, price } = prod
    return (
      <LinkContainer key={id}>
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
