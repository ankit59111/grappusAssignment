import React from "react"
import "./Header.css";
import user from "../user.png"
import SearchBar from "../searchBar/SearchBar";
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showDropDown: false
        }
    }


    handleDropdown(e){
        this.setState({
            showDropDown : !this.state.showDropDown
        })
    }

    render() {
        const state = this.state;
        return(
            <nav>
                <img  className="" src="https://www.kognetics.com/wp-content/uploads/2018/11/imageedit_39_8732036311.png"
                     alt="header_logo"/>
                <SearchBar imgClassName={"show"} submitClassName={"hide"}/>
                <div className="dropdown" onClick={this.handleDropdown.bind(this)}>
                    <img src={user} alt={"user"}/>
                    <span>Mrinalani Saha</span>
                </div>
                <div className ={`dropdown-menu ${state.showDropDown?"":"hide"}`}>
                    <ul className="dropdown-menu-list">
                        <li className="list-item">
                            Change Profile
                        </li>
                        <li className="list-item">
                            Settings
                        </li>
                        <li className="list-item">
                            Help
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}