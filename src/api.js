import axios from "axios";

export const fetchPostsAPI = (subreddit, timeframe, after) =>
  axios.get(`https://www.reddit.com/r/${subreddit}/top.json`, {
    params: { t: timeframe, sort: "activity", count: 25, after }
  });

export const fetchPreviousPostsAPI = (subreddit, timeframe, after) =>
  axios.get(`https://www.reddit.com/r/${subreddit}/top.json`, {
    params: { t: timeframe, sort: "activity", count: 25, before }
  });
