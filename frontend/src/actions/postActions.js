import {FETCH_POSTS, NEW_POST} from "./constant";

export function fetchPosts() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(posts => dispatch({type: FETCH_POSTS, payload: posts}))
            // .catch(err => console.log(err));
    }
}