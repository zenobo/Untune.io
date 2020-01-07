import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Item extends React.Component {
  isActive = (val, subreddit) => (
    val.name === subreddit ? 'sidebar-reddit-active' : ''
  )

  render() {
    const { val, subreddit, desktop } = this.props;
    return (
      <a
        key={val.name}
        href={`/${val.name}`}
        className={`${this.isActive(val, subreddit)} ${desktop && 'sidebar-desktop'}`}
      >
        r/
        {val.name}
      </a>
    );
  }
}

Item.propTypes = {
  subreddit: PropTypes.string.isRequired,
  desktop: PropTypes.bool.isRequired,
  val: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = () => ({ });

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Item);
