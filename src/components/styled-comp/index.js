import React from "react";
import {Button} from "../styled-comp/button/Button.styles";
import Wrapper from "./wrapper/Wrapper";
import HeaderText from "./header/HeaderText";

 const StyledComponents = ()=>{
    return(
        <Wrapper /*row*/>
           <HeaderText>Clarusway</HeaderText>
           <HeaderText headerColor="red">header with props</HeaderText>
            <Button>Default</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    );
};


export default StyledComponents;
