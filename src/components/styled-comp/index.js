import React from "react";
import {Button} from "../styled-comp/button/Button.styles";
import Wrapper from "./wrapper/Wrapper";
import HeaderText from "./header/HeaderText";
import Link from "./link/Link";
import ExtendedComp from "./extended-link/ExtendedComp";

 const StyledComponents = ()=>{
    return(
        <Wrapper /*row*/>
           <HeaderText>Clarusway</HeaderText>
           <HeaderText headerColor="red">Header with props</HeaderText>
           <Link secondary href="https://clarusway.com/" target="_blank" rel="noopener">Learn FS development</Link>
           <ExtendedComp>extended from Link comp</ExtendedComp>
            <Button>Default</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    );
};


export default StyledComponents;
