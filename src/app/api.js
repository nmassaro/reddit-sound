import axios from 'axios';

export const fetchPostsAPI = (subreddit, after) => (
     axios.get(`https://www.reddit.com/r/${subreddit}/top.json`, 
    { params: { t: 'week', sort: 'activity', limit: 10, after } })
);

export const fetchPreviousPostsAPI = (subreddit, before) => (
     axios.get(`https://www.reddit.com/r/${subreddit}/top.json`, 
    { params: { t: 'week', sort: 'activity', limit: 10, before } })
);