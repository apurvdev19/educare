import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';

export class SidePanel extends Component {
  static propTypes = {
    javaScript: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="java-script-side-panel">
        <ul>
          <li>
            <Link to="/java-script">Welcome</Link>
          </li>
          <li>
            <Link to="/examples/counter">Counter Demo</Link>
          </li>
          <li>
            <Link to="/examples/reddit">Reddit API Demo</Link>
          </li>
          <li>
            <Link to="/">Back to start page</Link>
          </li>
        </ul>
        <div className="memo">
          This is a Rekit feature that contains some examples for you to quick learn how Rekit
          works. To remove it just delete the feature.
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    javaScript: state.javaScript,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidePanel);
