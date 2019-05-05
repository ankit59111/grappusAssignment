import React from 'react';
import './App.css';
import Header from "./header/Header";
import FilterCard from "./filter card/FilterCard";
import PopularSector from "./popular sector/Popular_sector";
import SideBarCard from "./sidebar/sidebar_card/SideBarCard";

function App() {
  return (
      <React.Fragment>
        <div className="App flex ">
          <Header openNav = {openNav} closeNav = {closeNav}/>
        </div>
          <div id="overlay"></div>
        <div className={"flex flex-row"} id={"id_mainContentDiv"}>
          <div className="w-75" id={"id_section"}>
            <FilterCard/>
            <PopularSector/>
          </div>
          <div className={"w-25"} id={"id_aside"}>
            <SideBarCard placeholder="Search company" heading={"Find Strategic gaps"}/>
            <SideBarCard heading={"Explore Market maps"} placeholder="Search selector"/>
            <SideBarCard placeholder="Search sector" heading={"Identify Potential acquires"}/>
            <SideBarCard placeholder="Search company" heading={"Identify Growth Company"}/>
          </div>
        </div>
      </React.Fragment>
  );
}
function openNav() {
    document.getElementById("id_dropdown_menu").style.left="0%";
    document.getElementById("overlay").style.display="block";
}

function closeNav() {
    document.getElementById("id_dropdown_menu").style.left="100%";
    document.getElementById("overlay").style.display="none";
}

export default App;
