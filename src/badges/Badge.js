import React from "react";
import "./Badge.css"
export default class Badge extends React.Component {



    addBadgeBorder(e){
        let badge  = e.target
        badge.style.borderColor=this.props.color

    }

    removeBadgeBorder(e){
        let badge  = e.target;
        badge.style.borderColor="rgba(0,0,0,0.25)";
    }


    render() {
        const $color = {
            color:this.props.color,
            "textShadow":  `0 0 25px ${this.props.color}, 0 0 5px dark${this.props.color}`,
        };
        const $className = this.props.className || "";
        return(
            <button onMouseOver={this.addBadgeBorder.bind(this)} onMouseLeave={this.removeBadgeBorder.bind(this)} className={`card-badge ${$className}`}  style={$color}>
                {this.props.value}
            </button>
        )
    }
}