import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../header';
import Entries from '../entries';

import './style.scss';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  sidebarEnabled = () => {
    const { sidebarEnabled } = this.props;
    return sidebarEnabled ? '' : 'body-no-margin';
  }

  render() {
    return (
      <div className={`body-container ${this.sidebarEnabled()}`}>
        <Header />
        <Entries />
      </div>
    );
  }
}


Body.propTypes = {
  sidebarEnabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sidebarEnabled: state.ui.sidebarEnabled,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Body);
