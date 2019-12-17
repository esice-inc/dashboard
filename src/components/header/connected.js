import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
// import { } from './actions';

const mapStateToHeaderProps = (state) => {
  /*
  const branch = {
    name: state.branch.name,
    lastOpeningTime: state.branch.lastOpeningTime,
  };

  const barista = {
    name: state.barista.name,
    role: state.barista.role,
  };

  return { branch, barista };
    */

  return {};
};

const mapDispatchToHeaderProps = (dispatch) => ({});
  // bindActionCreators({ loadBranch, loadBarista }, dispatch);

export default connect(
  mapStateToHeaderProps,
  mapDispatchToHeaderProps,
)(Header);
