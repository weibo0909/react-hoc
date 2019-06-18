import { createStore } from 'redux';
import reducerFunc from './reducers';

const store = createStore(reducerFunc);

console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({
    type:'set_user',
    userInfo:{name:'wjk'}
});

store.dispatch({
    type:'set_base_info',
    baseInfo:{base:'hello'}
});


// unsubscribe();

export default store;