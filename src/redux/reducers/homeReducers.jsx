
import homeapi from "../../api/homeapi"
import createSlice from "../../core/createSlice"
const pagehome = JSON.parse(localStorage.getItem('pageHome'))
const initalState = {
   home:pagehome?.home || []

}
export function getHome() {
    return (dispatch) => {
        homeapi.home()
            .then(res => {
                dispatch({ type: TYPE.home, payload: res})
            })
    }
} let { action, reducer, TYPE } = createSlice({
    name: 'auth',
    initalState,
    reducers: {
        home: function (state, action) {
            return {
                ...state,
               home:action.payload
            }
        }


    }
})

export default reducer