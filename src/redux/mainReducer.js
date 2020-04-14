import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView28778Reducer from '../features/CalendarView28778/redux/reducers';
import Dashboard128777Reducer from '../features/Dashboard128777/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView28778: CalendarView28778Reducer,
Dashboard128777: Dashboard128777Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});