import courseApi from "../../api/courseApi"
import homeapi from "../../api/homeapi"
import createSlice from "../../core/createSlice"

const initalState = {
    Detail: [],
    Related: [],
    courses: [],
    Register: []

}
export function Coures() {
    return (dispatch) => {
        courseApi.courses()
            .then(res => {
                dispatch({ type: TYPE.course, payload: res })
            })
    }
}
export function Detail(slug) {
    return (dispatch) => {
        courseApi.detail(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res })
            })
    }
}
export function Related(slug) {
    return (dispatch) => {
        courseApi.related(slug)
            .then(res => {
                dispatch({ type: TYPE.course, payload: res })
            })
    }
}
export function Register(slug, success) {
    return (dispatch) => {
        courseApi.register(slug, success)
            .then(res => {
                if (res.success) {
                    dispatch({ type: TYPE.register, payload: res.success })
                }
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
                courses: action.payload.data,
                Detail: action.payload.data,
                Related: action.payload.data,
            }
        },
        register: function (state, action) {
            return {
                ...state,
                Register: action.payload
            }
        }
    }
})
export default reducer
