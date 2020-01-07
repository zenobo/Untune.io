// Modules
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Entry from './entry';

import './style.scss';

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { entries, loadingError } = this.props;
    return (
      <div>
        {loadingError
          ? <LoadingError />
          : (
            <div className="entries-container">
              <h2>In todays playlist</h2>

              <div className="entries-table">
                {entries.map((val) => (
                  <Entry key={`entries-${val.title}`} entry={val} />
                ))}
              </div>

            </div>
          )}
        <Credits />
      </div>
    );
  }
}

Entries.propTypes = {
  loadingError: PropTypes.bool.isRequired,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

const LoadingError = () => (
  <p className="loading-error">{'There was an issue loading data from Reddit&apos;s API. Please try again later'}</p>
);

const Credits = () => (
  <p className="credits">Powered by the Reddit API and Youtube</p>
);

const mapStateToProps = (state) => ({
  entries: state.reddit.entries,
  loadingError: state.reddit.loadingError,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
