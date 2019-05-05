import React from 'react';
import './App.css';
import Header from "./header/Header";
import FilterCard from "./filter card/FilterCard";
import Popular_sector from "./popular sector/Popular_sector";
import SideBarCard from "./sidebar/sidebar_card/SideBarCard";

function App() {
  return (
      <React.Fragment>
        <div className="App flex ">
          <Header/>
        </div>
        <div className={"flex flex-row"}>
          <div className="w-75">
            <FilterCard/>
            <Popular_sector/>
          </div>
          <div className={"w-25"}>
            <SideBarCard placeholder="Search company" heading={"Find Strategic gaps"}/>
            <SideBarCard heading={"Explore Market maps"} placeholder="Search selector"/>
            <SideBarCard placeholder="Search sector" heading={"Identify Potential acquires"}/>
            <SideBarCard placeholder="Search company" heading={"Identify Growth Company"}/>
          </div>
        </div>
      </React.Fragment>
  );
}

export default App;
