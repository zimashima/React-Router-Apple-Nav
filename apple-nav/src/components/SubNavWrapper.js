import React from "react"
import {data} from "./../data"
import SubNavi from "./SubNav"


const SubWrap = (props) => {

    const [thesubnav] = data.find(
        subnav => `${subnav.id}` === Number(props.match.params.id)
    )

    return (
        <span className="SubNavSpan">
            {
                thesubnav.list.map(each => (
                    <SubNavi url={each.url} product={each.product} />
                ))
            }
        </span>
    )
}

export default SubWrap