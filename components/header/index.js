import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CHROME_LINK } from 'data/constants';

import HeaderPlaylstBtn from './header-playlist-btn';
import HeaderText from './header-text';
import Hamburger from './hamburger';

import './style.scss';

const Header = ({subreddit}) => {
  return (
    <div className="header-container">
      <Hamburger />

      <div className="header-inner">
        <div className="header-banner">
          <HeaderText subreddit={subreddit} />
          <div className="playlist-preview">
            <img src="./images/playlist-preview.png" alt="Untune.io playlist preview on youtube" />
          </div>
        </div>

        <HeaderPlaylstBtn />
        <ChromeLink />
      </div>
    </div>
  );
}

const ChromeLink = () => (
  <a href={CHROME_LINK} target="_blank" className="header-chrome" rel="noopener noreferrer">
    <img src="/images/chrome.svg" alt="Download the Untune Chrome extension" />
  </a>
);

Header.propTypes = {
  subreddit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
