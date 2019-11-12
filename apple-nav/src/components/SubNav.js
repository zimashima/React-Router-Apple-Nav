import React from "react"


const SubNavi = (props) => {
    return (
        <span className="EachSubNav">
            <img src={props.url} alt="Product Icon"/>
            {props.product}
        </span>
    )
}

export default SubNavi;