import axios from 'axios';

const fetchPosts = () => (
     axios.get(`https://www.reddit.com/r/${this.state.subreddit}/new.json`, 
    { params: { sort: 'activity', limit: 5 } })
);

export default fetchPosts;