import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Redux
import * as uiActions from 'redux/ui/actions/index';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { ToggleSidebar } = this.props;
    return (
      <button
        className="header-hamburger"
        onClick={ToggleSidebar}
        type="submit"
      >
        <img
          src="./images/hamburger.svg"
          alt="Toggle the untune.io sidebar"
        />
      </button>
    );
  }
}

Hamburger.propTypes = {
  ToggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ToggleSidebar: uiActions.ToggleSidebar,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
