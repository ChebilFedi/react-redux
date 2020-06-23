import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer  from './Reducers'

const logger = store => next => action => {
    console.log('action object: ', action)
    
    
    next(action)

    let x = store.getState()
    console.log(x)
}

export default createStore(
    rootReducer,
    compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );