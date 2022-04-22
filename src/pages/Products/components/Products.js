import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const LinkContainer = styled.div`
  width: 23%;
  border-radius: 5px;
  margin: 1%;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`
const Title = styled.h6`
  margin-top: 20px;
`
const Price = styled.h5`
  margin-top: 15px;
`

const Image = styled.img`
  height: 80px;
  display: block;
  margin: 0 auto;
`
