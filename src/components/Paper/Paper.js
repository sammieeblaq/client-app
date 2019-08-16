// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//     root: {
//         padding: theme.spacing(3, 2),
//     },
// }));

// export default function PaperSheet() {
//     const classes = useStyles();

//     return (
//         <div>
            // <Paper className={classes.root}>
            //     <Typography variant="h5" component="h3">
            //         This is a sheet of paper.
            //     </Typography>
            //     <Typography component="p">
            //         Paper can be used to build surface or other elements for your application.
            //     </Typography>
            // </Paper>
//         </div>
//     );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/container';

const useStyles = makeStyles(theme => ({
    cont: {
        width: "99%",
        marginLeft: '0.5%',
        marginRight: '0.5%',
        marginTop: '10px',
        marginBottom: '2px',
        borderRadius: '12px'
    },
    root: {
        flexGrow: 1,
        height: 400
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div fixed={false} className={classes.cont}>            
            <div className={classes.elevation16}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.root}>
                            <Typography variant="h5" component="h3">
                                This is a sheet of paper.
                        </Typography>
                            <Typography component="p">
                                Paper can be used to build surface or other elements for your application.
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
