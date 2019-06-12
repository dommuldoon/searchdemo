import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  state = {
    posts: [],
    searchString: ""
  };

  componentWillMount() {
    // this.props.fetchPosts();
    this.props.dispatch(fetchPosts());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    // const { error, loading, posts } = this.props;
    // const postItems = this.props.posts.map(({ fields }, i) => (
    //   <div key={fields.id}>
    //     <h3>{fields.title}</h3>
    //     <p>{fields.body}</p>
    //   </div>
    // ));s
    // if (this.props.loading) return <h2>Loading!!!!!!!</h2>;

    return (
      <>
        {this.props.loading ? <h2>Loading</h2> : ""}
        <div color="primary">
          {this.props.posts.map(({ fields }, i) => (
            <div key={i}>
              {fields.title}
              <h3>{fields.title}</h3>
              <p>{fields.body}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps)(Posts);
