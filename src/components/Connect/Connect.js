import React from 'react';
import { Box,Paper,Button,createStyles,makeStyles,Typography } from '@material-ui/core';
import smile from '../../Asset/smile.png';
// import TextField from '@material-ui/core/TextField';


const Connect = () => {
    const classes = useStyles();
    return(
        <Box component={Paper} elavation= {false} className={classes.connect}>
            <div className={classes.feedback}>
                <Button className={classes.button}>Feedback here</Button>
            </div>
            <div>
                <img src={smile} width="200px" height= "150px" alt= "smile everyone"/>   
            </div>

            <div>
                <Typography  variant="h5" className={classes.Typography1}>WE ARE HERE TO HELP YOU.</Typography>
                <Typography className={classes.Typography2}>We want to keep on improving our product and provide quality to our customer.Please provide feedback so that we can improve our product.</Typography>
            </div>
        </Box>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        connect: {
            marginTop:'2%',
            height:'200px',
            display:'flex',
            padding:'2%',
            justifyContent:'space-between'
        },
        Typography1: {
            fontSize:'22px',
            fontFamily:'inherit',
            fontWeight:'500',
            color:'#00669b'
        },
        Typography2: {
            width:'450px',
            paddingTop:'8px',
            fontSize:'16px',
            paddingBottom:'16px'
        },
        button: {
            color:'hotpink',
            outline:'auto',
            textTransform:'initial',
            fontSize:'16px',
            "&:hover": {
                color:'hotpink',
                outline:'auto'
            }
        },
        feedback: {
            alignSelf:'center',
            marginTop:'8px'
        }
    }))

export default Connect;