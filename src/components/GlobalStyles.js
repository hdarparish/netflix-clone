import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{    
    font-family: 'Montserrat' , sans-serif;
    width:100%;
    /*       background-color: #f5eeee; */
    background:#141414;
}
h2{
    font-size:3rem;
    font-family: 'Montserrat' , sans-serif;
    font-weight:lighter;
    color:#333;
}
h3{
    font-size:1.5rem;
    color: #333;
    padding:1.5rem 0rem;
}
p{
    font-size:1.5rem;
    line-height:200%;
    color:#696969;
}
span{
    font-weight: bold;
    color: #39af95;
}
a{
    text-decoration:none;
    color: #333;
}
img{
    display:block;
}
input, textarea{
    font-family: 'Montserrat' , sans-serif;
}
`;

export default GlobalStyles;
