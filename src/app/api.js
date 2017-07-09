import axios from 'axios';

const fetchPosts = (subreddit) => (
     axios.get(`https://www.reddit.com/r/${subreddit}/top.json`, 
    { params: { t: 'week', sort: 'activity', limit: 10 } })
);

export default fetchPosts;