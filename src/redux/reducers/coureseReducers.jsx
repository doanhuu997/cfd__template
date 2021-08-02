import courseApi from "../../api/courseApi"
import homeapi from "../../api/homeapi"
import createSlice from "../../core/createSlice"

const initalState = {
    Detail: [],
    Related:[],
    list:[]

}
export function Detail(slug) {
    return (dispatch) => {
        courseApi.detail(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res.data })
            })
    }
} 
export function Related(slug) {
    return (dispatch) => {
        courseApi.related(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res.data })
            })
    }
} 
export function Register(slug) {
    return (dispatch) => {
        courseApi.detail(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res.data })
            })
    }
} 
 let { action, reducer, TYPE } = createSlice({
    name: 'course',
    initalState,
    reducers: {
        course: function (state, action) {
            return {
                ...state,
                Detail: action.payload.data,
                Related: action.payload.data,

            }
        },
     


    }
})
export default reducer