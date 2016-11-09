
import { RECEIVE_ROUTES,REQUEST_ROUTES,CREATE_ROUTE,RECEIVE_SINGLE_ROUTE,REQUEST_SINGLE_ROUTE, UPDATE_BOUNDS } from '../actions/route_actions';
import merge from 'lodash/merge';



const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_SINGLE_ROUTE:
      return merge({}, state, {[action.route.id]:action.route});
    case UPDATE_BOUNDS:
      return merge({}, state, {bounds: action.bounds});
    default:
      return state;
  }
};

export default RoutesReducer;
