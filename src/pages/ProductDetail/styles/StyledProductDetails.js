import styled from 'styled-components'

export const StyledProductDetails = styled.div`
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

export const Title = styled.h2`
  margin-bottom: 15px;
`
export const Price = styled.h3`
  margin: 15px 0;
`

export const Image = styled.img`
  height: 180px;
  display: block;
  margin: 0 auto;
`
export const Category = styled.h5`
  margin-bottom: 10px;
  text-transform: capitalize;
`

export const Description = styled.div`
  font-size: 14px;
  margin: 20px;
`
