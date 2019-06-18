import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { requestApiData, requestTweets } from "../actions";

const useStyles = makeStyles(() => ({
  container: {
    marginBottom: "20px",
    marginTop: "20px",
    textAlign: "center",
  },
  divider: {
    borderTop: "5px solid grey",
    marginBottom: "20px",
    marginTop: "20px",
    width: "30%",
  },
  paper: {
    marginTop: 10,
  },
  repos: {
    "& li": {
      padding: "10px 5px",
      textAlign: "left",
    },
    "& li:hover ": {
      backgroundColor: "#e2e2e2",
      cursor: "pointer",
    },
    "listStyle": "none",
    "padding": 0,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
}));
interface IRepo {
  id: number;
  name: string;
  description: string;
}

interface ITweet {
  id: number;
  text: string;
}

export interface IHomeProps {
  requestApiData: any;
  requestTweets: any;
  data: IRepo[];
  tweetsloading: boolean;
  tweets: ITweet[];
  tweetsLoading: boolean;
}

export const Home: React.FC<IHomeProps> = (props) => {
  const [q, setQ] = useState("");
  const [reposOpen, setreposOpen] = useState(false);
  const [tweetsOpen, setTweetsOpen] = useState(false);
  const [tweetQ, setTweetQ] = useState("");

  const classes = useStyles();

  const changeQuery = (event: {
    target: { value: string };
  }) => {
    // setQ(event.target.value);
    if (event.target.value) {
      setreposOpen(true);
      props.requestApiData(event.target.value);
      setTweetsOpen(false);
    } else {
      setreposOpen(false);
      setTweetsOpen(false);
    }
  };

  const handleRepoClick = (param: string) => {
    setTweetQ(param);
    setQ(param);
    setreposOpen(false);
    props.requestTweets(param);
    setTweetsOpen(true);
  };

  return (
    <>
      <div className="unique" />
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h6" align="center">
          Weclome to TwitHub.
          <br />
          Please search to select a repo and view its Tweets.
        </Typography>

        <div className={classes.wrapper}>
          <TextField
            placeholder="Type something here to search"
            type="text"
            value={q}
            onChange={changeQuery}
            id="searchbox"
          />
          {reposOpen && q ? (
            <Paper className={classes.paper}>
              <ul className={classes.repos}>
                {props.data ? (
                  props.data.map((repo) => {
                    return (
                      <li key={repo.id} onClick={() => handleRepoClick(repo.name)}>
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
                        Loading
                    </Typography>
                    </li>
                  )}
              </ul>
            </Paper>
          ) : null}
        </div>
        {tweetsOpen ? (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Tweets regarding {tweetQ}
            </Typography>
            <ul className={classes.repos}>
              {!props.tweetsloading && props.tweets ? (
                props.tweets.map((tweet) => {
                  return <li key={tweet.id}>{tweet.text}</li>;
                })
              ) : props.tweetsLoading ? (
                <p>Loading</p>
              ) : (
                    <p>No tweets for this selection currently.</p>
                  )}
            </ul>
          </Paper>
        ) : null}
      </Container>
    </>
  );
  // }
};

const mapStateToProps = (state: {
  data: { items: IRepo[]; loading: boolean };
  tweets: { items: ITweet[]; loading: boolean };
}) => ({
  data: state.data.items,
  dataLoading: state.data.loading,
  tweets: state.tweets.items,
  tweetsLoading: state.tweets.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ requestApiData, requestTweets }, dispatch);

const conHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default conHome;
