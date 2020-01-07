import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import { SUBREDDITS, SUBREDDITS_DESKTOP } from 'data/constants';

// Redux
import * as uiActions from 'redux/ui/actions/index';

// Components
import Item from './item';

// Style
import './style.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reddits: SUBREDDITS,
      desktopOnly: SUBREDDITS_DESKTOP,
    };
  }

  render() {
    const { reddits, desktopOnly } = this.state;
    const { subreddit, sidebarEnabled } = this.props;
    return (
      <div className={`sidebar-container ${sidebarEnabled ? '' : 'sidebar-disabled'}`}>

        <img src="./images/logo.svg" className="logo" alt="Untune.io Logo" />

        <div className="sidebar-reddit-links">
          <h4>Subreddits</h4>

          {reddits.map((val) => (
            <Item key={val.name} val={val} subreddit={subreddit} desktop={false} />
          ))}

          {desktopOnly.map((val) => (
            <Item key={val.name} val={val} subreddit={subreddit} desktop />
          ))}

        </div>

      </div>
    );
  }
}

Sidebar.propTypes = {
  /**
    Use the loading state to indicate that the data Avatar needs is still loading.
  */
  subreddit: PropTypes.string.isRequired,
  sidebarEnabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit,
  sidebarEnabled: state.ui.sidebarEnabled,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ToggleSidebar: uiActions.ToggleSidebar,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
