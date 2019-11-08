import React from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { fontWeight } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';


class Home extends React.Component{
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
        <div>
            <h2 className="head">m@d Mind</h2>
            <div class="div-cent">
            <Card style={{minWidth: "50%",paddingTop:"1%",paddingBottom:"1%"}}>
                <CardContent style={{}}>
                <Grid container spacing={5} >
                <Grid item xs={2}></Grid>
                    <Grid item xs={4} >
                    <TextField
                        id="standard-basic"
                        label="Booked By"
                        />
                    
                    </Grid>
                    <Grid item xs={4} >
                    <TextField
                        id="standard-basic"
                        label="Booked By"
                        />
                    </Grid>
                    </Grid>
                    
                </CardContent>
                <CardContent>
                    <Grid container spacing={5}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} >
                    <TextField
                        id="standard-basic"
                        label="Source"
                        />
                    </Grid>
                    <Grid item xs={4} >
                    <TextField
                        id="standard-basic"
                        label="Destination"
                        />
                    </Grid>
                </Grid>
                </CardContent>
                <CardContent>
                <Grid container spacing={5}>
                <Grid item xs={2}></Grid>
                    <Grid item xs={4} >
                    <TextField
                        id="standard-basic"
                        label="Booked By"
                        />
                    </Grid>
                    <Grid item xs={4} >
                    <TextField
                        id="standard-basic"
                        label="Amount"
                        />

                    </Grid>
                </Grid>
                </CardContent>
                <CardContent>
                <Grid container spacing={6} justify="center">
                <Grid item>
                <Button variant="contained" color="primary" style={{fontWeight:"bold"}}>
                    SUBMIT
                </Button>
                </Grid>
                </Grid>
                </CardContent>
            </Card>
            
            </div>

            </div>  
        );
    }
}
 
export default Home;