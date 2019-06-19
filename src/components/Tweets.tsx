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

export interface ITweetsProps {
    tweets: any[];
    tweetsLoading: boolean;
    repo: string;
}

const Tweets: React.SFC<ITweetsProps> = (props) => {
    const classes = useStyles();
    return (<Paper className={classes.paper}>
        <Typography variant="h6" align="center">
            Tweets regarding {props.repo}
        </Typography>
        <ul className={classes.repos}>
            {!props.tweetsLoading && props.tweets ? (
                props.tweets.map(tweet => {
                    return <li key={tweet.id}>{tweet.text}</li>;
                })
            ) : props.tweetsLoading ? (
                <p className="loadingText">Loading</p>
            ) : (
                        <p>No tweets for this selection currently.</p>
                    )}
        </ul>
    </Paper>);
}

export default Tweets;