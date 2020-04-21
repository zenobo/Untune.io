import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../header';

import './style.scss';

const Body = ({sidebarEnabled}) => {

  const isSidebarEnabled = () => {
    return sidebarEnabled ? '' : 'body-no-margin';
  }

  return (
    <div className={`body-container ${isSidebarEnabled()}`}>
      <Header />
    </div>
  );
}


Body.propTypes = {
  sidebarEnabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sidebarEnabled: state.ui.sidebarEnabled,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Body);
