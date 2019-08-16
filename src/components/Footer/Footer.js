import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
//import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    cont: {
        width: "99%",
        marginLeft:'0.5%',
        marginRight: '0.5%',
        marginTop: '10px',
        marginBottom:'2px',
        borderRadius: '12px'
    }
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div fixed={false} className={classes.cont}>
            <Grid container>
                <Grid item xs={12}>
                    <BottomNavigation
                        style={{ background: "rgb(0, 119, 109)" }}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        
                        className={classes.root}
                    >
                        <p>@Copyright Sommerce</p>
                    </BottomNavigation>
                </Grid>
            </Grid>
        </div>
    );
}
