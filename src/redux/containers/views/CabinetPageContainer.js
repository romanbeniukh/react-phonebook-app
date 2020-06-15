import { connect } from 'react-redux';
import { GET_AUTH } from '../../selectors/SessionSelectors';
import CabinetPage from '../../../views/CabinetPage';

const mapStateToProps = state => ({
  isAuth: GET_AUTH(state),
});

export default connect(mapStateToProps, null)(CabinetPage);
