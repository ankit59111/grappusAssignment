import React from "react";
import SearchBar from "../../searchBar/SearchBar";
import "./SideBarCard.css"
export default class SideBarCard extends React.Component{

    render() {
        const $placeholder = this.props.placeholder || "";
        return(
            <div className="card sidebar">
                <h4><span className="circle"></span>{this.props.heading}</h4>
                <p className={"pl-5 w-100"}>Lorem Ipsum door set emit.</p>
                <div className={"w-90"}>
                <SearchBar placeholder={$placeholder} imgClassName={"hide"} submitClassName={"show"}/>
                </div>

            </div>
        )
    }
}