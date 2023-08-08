import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
export default function BasicCard(props) {
    return (
        <Grid item xs={3}  sx={{}}>
            {/* // Paper properties square,  variant ='outlined' */}
            <Paper elevation={2} sx={{ bgcolor: props.bgColor,height:'135px' }} color={props.bgColor} key={props.title}>
                <Box paddingX={1}>
                    <Box paddingY={1}>
                        <Typography color='white' variant='body2' component="h4">{props.heading}</Typography>
                    </Box>
                    <Box paddingY={7}>
                        <Typography color='white' variant='body2' component="p">x Items</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}
