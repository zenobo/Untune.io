import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux
import * as redditActions from 'redux/reddit/actions/index';

// Components
import MetaData from 'components/meta-data';
import Sidebar from 'components/sidebar';
import Body from 'components/body';

// CSS
import 'style/theme/main.scss';

class Home extends React.Component {
  static async getInitialProps({ query, store }) {
    const { subreddit } = query;
    await Promise.all([
      store.dispatch(redditActions.SetSubreddit(subreddit)),
    ]);
    return { subreddit };
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { FetchDesktop, FetchMobile, subreddit } = this.props;
    if(window.innerWidth>850){
      FetchDesktop(subreddit);
    }else{
      FetchMobile(subreddit);
    }
  }

  render() {
    return (
      <div className="app">
        <MetaData />

        <div className="page">
          <Sidebar />
          <Body />
        </div>

      </div>

    );
  }
}

Home.propTypes = {
  FetchDesktop: PropTypes.func.isRequired,
  FetchMobile: PropTypes.func.isRequired,
  subreddit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit,
});

const mapDispatchToProps = (dispatch) => ({
  FetchDesktop: (subreddit) => dispatch(redditActions.FetchDesktop(subreddit)),
  FetchMobile: (subreddit) => dispatch(redditActions.FetchMobile(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
