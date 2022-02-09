import styled from "styled-components";

export default styled.div`
background-color:white;
margin:auto;
height:100vh;
width:100%;
display:flex;
flex-direction:${(props)=>props.row ? "row" : "column"};/* props ile seçenekli hale getirmiş olduk*/
justify-content:center;
align-items:center;
`