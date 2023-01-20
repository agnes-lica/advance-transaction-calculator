import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

:root{
  //primary colors
  --primary-color: #5385c3;
  --primary-focus-color: #9cc2f2;
  --primary-2-color: #f5f7fa;

  //gray scale
  --gray-color-0:#fff;
  --gray-color-1:#dadada;
  --gray-color-2:#878787;
  --black: #000000;

  //fonts
  --font-family-1: 'Roboto', sans-serif;
  --font-family-2: 'Montserrat', sans-serif;

}


*{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;   
}

body{
    background: var(--gray-color-1);
    color: var(--gray-color-2);
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-family-1);
    width: 100%;

    overflow-x: hidden;
    display: flex;
    justify-content: center;
    padding: 50px;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
} 


::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-track{
    background: var(--gray-color-1);
    margin: 1rem;
    border-radius: 1.6rem;
}

::-webkit-scrollbar-thumb{
    background: var(--primary-negative-color);
    border-radius: 1.6rem;
}

::-webkit-scrollbar-thumb:hover{
    background: var(--primary-focus-color);
}

::-webkit-input-placeholder {
    color:var(--gray-color-1)
}

input{
    border-radius: 5px solid 2px --gray-color-1;
    padding: 5px;
}

input:focus{
    border: solid 2px --primary-focus-color;
}

`;

export default Global;
