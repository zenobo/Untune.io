import fetch from 'isomorphic-fetch';

import { DEFAULT_SUBREDDIT, PLAYLIST_BASE } from 'data/constants';
import getYouTubeID from 'get-youtube-id';

// Actions
export const SET_ENTRIES = 'Set entries';
export const SET_SUBREDDIT = 'Set subreddit'
export const SET_LOADING_ERROR = 'Set loading error'

// Methods
export const FetchDesktop = (subreddit) => {
  return (dispatch) => {
    return fetch(`https://www.reddit.com/r/${getSubreddit(subreddit)}/hot/.json?count=30`)
      .then((response) => response.json())
      .then((response) => {
        let { posts, playlistURL } = parseIds(response);
        return dispatch({
          type: SET_ENTRIES,
          payload: {
            entries: posts,
            youtubeUrl: playlistURL
          }
        })
      }).catch((err)=>{
        return dispatch({
          type: SET_LOADING_ERROR
        })
      })
  }
}

export const parseIds = (data) => {
  let posts = [];
  let playlistURL = PLAYLIST_BASE;
  let youtubeId;

  data.data.children.map((val)=>{
    let {url, permalink, title} = val.data;
    // add video
    youtubeId = getYouTubeID(url);
    if(youtubeId && youtubeId.length == 11){
      posts.push({url, permalink, title, youtubeId: youtubeId});
      playlistURL += `, ${youtubeId}`;
    }
  })
  return { posts, playlistURL };
}

export const FetchMobile = (subreddit) => {
  return (dispatch) => {
    return fetch(`https://api.untune.io/subreddit?name=${getSubreddit(subreddit)}`)
      .then((response) => response.json())
      .then((response) => {

        const { posts, url } = response.data;
        return dispatch({
          type: SET_ENTRIES,
          payload: {
            entries: posts,
            youtubeUrl: url
          }
        })

      }).catch((err)=>{
        return dispatch({
          type: SET_LOADING_ERROR
        })
      })
  }
}

export const getSubreddit = (subreddit) => {
  let subredditName = subreddit ? subreddit : DEFAULT_SUBREDDIT;
  return subredditName;
}

export const SetSubreddit = (subreddit) => {
  return (dispatch) => {
    return dispatch({
      type: SET_SUBREDDIT,
      payload: {
        subreddit: getSubreddit(subreddit),
        isDefault: subreddit==undefined
      }
    })
  }
}
