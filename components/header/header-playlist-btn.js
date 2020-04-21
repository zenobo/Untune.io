import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HeaderPlaylstBtn = ({youtubeUrl}) => {
  return (
    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
      <img src="./images/playlist-youtube.svg" className="header-playlist-btn" alt="Create a youtube playlist" />
    </a>
  );
}

HeaderPlaylstBtn.propTypes = {
  youtubeUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  youtubeUrl: state.reddit.youtubeUrl,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPlaylstBtn);
