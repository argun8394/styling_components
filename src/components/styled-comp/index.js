import React from "react";
import {Button} from "../styled-comp/button/Button.styles";
import Wrapper from "./wrapper/Wrapper"

 const StyledComponents = ()=>{
    return(
        <Wrapper /*row*/>
            <Button>Default</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    );
};


export default StyledComponents;
