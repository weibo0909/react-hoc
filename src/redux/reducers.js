import { combineReducers } from 'redux';


function setUser(state={},action) {
    switch (action.type){
        case 'set_user':
            return {
                ...state,
                userInfo:action.userInfo,
            }
            break;
        default: return state;
    }
}

function setBaseInfo(state={},action) {
    switch (action.type){
        case 'set_base_info':
            return {
                ...state,
                baseInfo:action.baseInfo,
            }
            break;
        default: return state;
    }
}

const reducers = combineReducers({setUser,setBaseInfo});

export default reducers;