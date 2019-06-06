import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Card from './Card';
// import { } from './actions';

const mapStateToCardProps = (state) => {
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
};

const mapDispatchToCardProps = (dispatch) => {}
  // bindActionCreators({ loadBranch, loadBarista }, dispatch);

export default connect(
  mapStateToCardProps,
  mapDispatchToCardProps,
)(Card);
