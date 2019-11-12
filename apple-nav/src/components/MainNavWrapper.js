import React, {useState} from "react"
import {data} from "./../data"
import Nav from "./Nav"
import {Link, Route} from "react-router-dom"


 const MainWrap = () => {

    const [thedata] = useState(data)

    return (
        <div className="NavWrap">
            <span className="logo">
                <Link exact to="/"><i class="fab fa-apple"></i></Link>
            </span>
            <span className="NavMenu">
                {
                    thedata.map(each => (
                        <Nav mainmenu={each.name} />
                    ))
                }

            </span>
            <span className="SearhAndShop">

            </span>

            <Route exact path="/" />
        </div>
    )
}

export default MainWrap