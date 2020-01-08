import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { subreddit } = this.props;
    return (
      <div>
        <h1>
          Start listening to
          <br />
          <a href="https://reddit.com/r/listentothis" target="_blank" rel="noopener noreferrer">
            r/
            {subreddit}
          </a>
          <br />
          <span> on Youtube</span>
        </h1>
      </div>
    );
  }
}

HeaderText.propTypes = {
  subreddit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderText);
