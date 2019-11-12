import React from "react"
import {Link, Route} from "react-router-dom"
import SubWrap from "./SubNavWrapper"

const Nav = (props) => {

    return (
        <div className="Nav">
            <Link to={props.mainmenu} className="NavLink" > {props.mainmenu}</Link>
            <Route path=":name" component={SubWrap}/>
        </div>
    )
}

export default Nav;