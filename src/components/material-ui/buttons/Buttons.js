import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Buttons = () => {
    return (
        <div>
            <ButtonGroup variant="contained" size="Large" >
            <Button color="secondary" startIcon={<SaveIcon/>}>Save</Button>
            <Button color="primary"  endIcon={<DeleteIcon/>}>Delete</Button>
            </ButtonGroup>
        </div>
    );
};

export default Buttons;