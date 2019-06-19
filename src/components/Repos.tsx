import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    paper: {
        marginTop: 10
    },
    repos: {
        "& li": {
            padding: "10px 5px",
            textAlign: "left"
        },
        "& li:hover ": {
            backgroundColor: "#e2e2e2",
            cursor: "pointer"
        },
        listStyle: "none",
        padding: 0
    },
}));


export interface IReposProps {
    data: any[];
    repoClick: any;
}



const Repos: React.SFC<IReposProps> = (props) => {
    const classes = useStyles();
    const raiseRepoClick = (param: string) => {
        props.repoClick(param);
    };
    return (<Paper className={classes.paper}>
        <ul className={classes.repos}>
            {props.data ? (
                props.data.map(repo => {
                    return (
                        <li
                            key={repo.id}
                            onClick={() => raiseRepoClick(repo.name)}
                        >
                            <Typography gutterBottom variant="h5" component="h2">
                                {repo.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {repo.description}
                            </Typography>
                        </li>
                    );
                })
            ) : (
                    <li>
                        <Typography gutterBottom variant="h5" component="h2">
                            Loading
              </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >

                        </Typography>
                    </li>
                )}
        </ul>
    </Paper>);
}

export default Repos;