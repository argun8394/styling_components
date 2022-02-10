import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const Cards = ()=> {
    return(
        <Grid container justify="center" spacing={2}>
            {[0,1, 2].map((value)=>(
                <Grid key={value} item/*her birinin item olduğunu belirtmemiz gerekir yani tek tek davranmasını sağlarız */ xs={3}/*kartın kapladığı column ı belirtmiş oluyoruz */ sm={6}>
                    <Paper style={{height:90, width:50}}/>
                    </Grid>
            ))}
        </Grid>
    );
};

export default Cards;