import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestApiData, requestTweets } from "../actions";
import _ from "lodash";
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
  const [reposOpen, setreposOpen] = useState(false);
  const [tweetsOpen, setTweetsOpen] = useState(false);
  const [tweetQ, setTweetQ] = useState();

  const changeQuery = event => {
    setQ(event.target.value);
    if (event.target.value) {
      setreposOpen(true);
      props.requestApiData(event.target.value);
      setTweetsOpen(false);
    } else {
      setreposOpen(false);
      setTweetsOpen(false);
    }
  };

  const handleRepoClick = e => {
    console.log("Name :", e.currentTarget.innerHTML);
    setTweetQ(e.currentTarget.innerHTML);
    setQ(e.currentTarget.innerHTML);
    setreposOpen(false);
    // props.dispatch(fetchTweets(q));
    // getTweets(e.currentTarget.innerHTML);
    props.requestTweets(q);
    setTweetsOpen(true);
  };

  const { classes } = props;
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
          {reposOpen && q ? (
            <Paper className={classes.paper}>
              <ul className={classes.repos}>
                {props.data ? (
                  props.data.items.map((s, i) => {
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
              {!props.tweetsloading && props.tweets ? (
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
  data: state.data.items,
  tweets: state.tweets.items,
  dataLoading: state.data.loading,
  tweetsLoading: state.tweets.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, requestTweets }, dispatch);

const conHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default withStyles(styles)(conHome);
