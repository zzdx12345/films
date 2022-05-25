import { createStore } from 'redux'




const reducer = (prevState={
    comminglist: [],
    showinglist: []
}, action={})=>{
    let newState = {...prevState}
    switch(action.type){
        case 'comminglist':
            newState.comminglist = action.payload
            return newState
        case 'showinglist':
            newState.showinglist = action.payload
            return newState
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default store
