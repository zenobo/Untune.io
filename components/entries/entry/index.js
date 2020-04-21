import React from 'react';
import PropTypes from 'prop-types';

const RedditEntry = ({ entry }) => {

  const { title, permalink } = entry;
  return (
    <div className="entries-item">
      <a href={`https://reddit.com${permalink}`} rel="noopener noreferrer" target="_blank">{title}</a>
    </div>
  );
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
