import React from 'react';
import PropTypes from 'prop-types';

class RedditEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { entry } = this.props;
    const { title, permalink } = entry;
    return (
      <div className="entries-item">
        <a href={`https://reddit.com${permalink}`} rel="noopener noreferrer" target="_blank">{title}</a>
      </div>
    );
  }
}

RedditEntry.propTypes = {
  entry: PropTypes.shape({
    title: PropTypes.string,
    permalink: PropTypes.string,
  }),
};

RedditEntry.defaultProps = {
  entry: {},
};

export default RedditEntry;
