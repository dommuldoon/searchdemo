import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchPosts } from "../actions/postActions";
import { fetchTweets } from "../actions/tweetActions";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40
  },
  divider: {
    width: "30%",
    borderTop: "5px solid grey",
    marginTop: "20px",
    marginBottom: "20px"
  },
  container: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center"
  },
  paper: {
    marginTop: 10
  },
  repos: {
    listStyle: "none",
    "& li": {
      padding: "10px 5px",
      textAlign: "left"
    },
    "& li:hover ": {
      backgroundColor: "#e2e2e2",
      cursor: "pointer"
    },
    padding: 0
  }
});

const Home = props => {
  const [q, setQ] = useState("");
  const [results, setresults] = useState([]);
  const [reposOpen, setreposOpen] = useState(false);
  const [tweetsOpen, setTweetsOpen] = useState(false);
  const [tweets, settweets] = useState([]);
  const [tweetQ, setTweetQ] = useState();
  const [_searches, set_searches] = useState([]);

  function makeAutocompleteLookup(q) {
    if (q) {
      props.dispatch(fetchPosts(q));
    } else {
      props.dispatch(fetchPosts());
    }
    setTweetsOpen(false);
  }

  const autocompleteSearchDebounced = _.debounce(makeAutocompleteLookup, 1000);
  const autocompleteSearchThrottled = _.throttle(makeAutocompleteLookup, 1000);

  const getTweets = q => {
    props.dispatch(fetchTweets(q));
    setTweetsOpen(true);
  };

  const changeQuery = event => {
    setQ(event.target.value);
    setreposOpen(true);
    const thisQ = q;

    // if (thisQ.length < 5) {
    //   autocompleteSearchThrottled(thisQ);
    // } else {
    autocompleteSearchDebounced(thisQ);
    // }
  };

  const autocompleteSearch = q => {
    _fetch(q);
  };

  const handleRepoClick = e => {
    console.log("Name :", e.currentTarget.innerHTML);
    setTweetQ(e.currentTarget.innerHTML);
    setQ(e.currentTarget.innerHTML);
    setreposOpen(false);
    props.dispatch(fetchTweets(q));
    // getTweets(e.currentTarget.innerHTML);
    setTweetsOpen(true);
  };

  const _fetch = q => {
    const searches = _searches || [];
    searches.push(q);
    set_searches(searches);
  };

  const { classes } = props;
  // const _searches = this.state._searches || [];
  return (
    <>
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
          />
          {reposOpen ? (
            <Paper className={classes.paper}>
              <ul className={classes.repos}>
                {!props.postsLoading || props.posts.length > 5 ? (
                  props.posts.map((s, i) => {
                    return (
                      <li key={s.id}>
                        <Typography
                          onClick={handleRepoClick}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {s.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {s.description}
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
              {!props.tweetsLoading && props.tweets.length > 0 ? (
                props.tweets.map((s, i) => {
                  return <li key={s.id}>{s.text}</li>;
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

const mapStateToProps = state => ({
  postsLoading: state.posts.loading,
  posts: state.posts.items,
  tweetsLoading: state.tweets.loading,
  tweets: state.tweets.items
});

const conHome = connect(mapStateToProps)(Home);

export default withStyles(styles)(conHome);
