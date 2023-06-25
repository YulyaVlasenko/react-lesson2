import styled from "styled-components"


export const Container = styled.div`

background-color: ${props => props.isHide ? 'blue' : 'black'}; 
/* Або background-color: ${({isHide}) => (isHide ? 'blue' : 'black')};  */

  /* background-color: black; */
  width: 300px;
  &: hover {
    background-color: red;
  }

  /*вкладенність стилізуємо */
  div>h5 {
    color: green;
  }
`

export const Photo = styled.img`
  width: 300px;
`
