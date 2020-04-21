import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import { SUBREDDITS } from 'data/constants';

// Redux
import * as uiActions from 'redux/ui/actions/index';

// Components
import Item from './item';

// Style
import './style.scss';

const Sidebar = ({subreddit, sidebarEnabled}) => {

  const [reddits, setReddits] = React.useState(SUBREDDITS);

  return (
    <div className={`sidebar-container ${sidebarEnabled ? '' : 'sidebar-disabled'}`}>

      <img src="./images/logo.svg" className="logo" alt="Untune.io Logo" />

      <div className="sidebar-reddit-links">
        <h4>Subreddits</h4>

        {reddits.map((val) => (
          <Item key={val.name} val={val} subreddit={subreddit} desktop={false} />
        ))}

      </div>

    </div>
  );
}

Sidebar.propTypes = {
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
