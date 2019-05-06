import React from "react"
import Badge from "../badges/Badge";
import "./Card.css"

export default class Card extends React.Component{

    render() {
        return(
            <div className={`${this.props.className } card filter_card w-31 ml-0  `}>
                <p>{this.props.text}

                    <span> <Badge className = "m-0" value={this.props["badge-value"]} color={this.props["badge-color"]}/></span></p>
            </div>
        )
    }

}