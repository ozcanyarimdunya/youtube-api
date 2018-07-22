import React, {Component} from "react"

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/postActions";
import Item from "./Item";


class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <ul>
                {
                    this.props.posts.map((post, index) => <Item key={index} text={post.title}/>)
                }
            </ul>
        )
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
});

// export default Post;
export default connect(mapStateToProps, {fetchPosts})(Post);