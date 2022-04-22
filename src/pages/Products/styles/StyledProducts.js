import styled from 'styled-components'

export const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

export const LinkContainer = styled.div`
  position: relative;
  width: 23%;
  border-radius: 5px;
  margin: 1%;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  & svg {
    position: absolute;
    right: 7px;
    color: red;
    opacity: 0.4;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`
export const Title = styled.h6`
  margin-top: 20px;
`
export const Price = styled.h5`
  margin-top: 15px;
`

export const Image = styled.img`
  height: 80px;
  display: block;
  margin: 0 auto;
`
