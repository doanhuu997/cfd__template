import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


export default function PrivateRouter(props) {

    const { login } = useSelector(state => state.auth);
    if (auth.login) {
        return <Route {...props} />
    }
    else {
        return (
            <Redirect to="/cfd__template/" />
        )
    }
}