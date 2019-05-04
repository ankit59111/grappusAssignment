import React from "react";
import "./SearchBar.css"
import search_icon from "../images/magnifier.svg";
import arrowIcon from "../images/angle_.png"

export default class SearchBar extends React.Component{

    render() {
        const $imgClassName = this.props.imgClassName || "";
        const $placeholder = this.props.placeholder || "Search";
        const $submitIcon = this.props.submitClassName || "";
        return(
            <form className="form-inline mr-25 mt-16 mb-16">
                <img className={$imgClassName} src={search_icon} alt={"search_icon"}/>
                <input type="text" name="search" placeholder={$placeholder}/>
                <img className={`submitIcon ${$submitIcon}`} src={arrowIcon} alt={"submit icon"}/>
            </form>
        )
    }
}