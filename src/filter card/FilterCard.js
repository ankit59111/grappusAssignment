import React from "react";
import "./FilterCard.css"
import Badge from "../badges/Badge";
import Card from "../card/Card";

export default class FilterCard extends React.Component{

    constructor(props){
        super(props)
        this.state={

            badges:[{text:"Profile",color:"red"},{text:"Comparables",color:"orange"},
                {text:"Strategic gaps",color:"green"},{text:"Potential aquires",color:"blue"}],

            cards:[{text:"what are the most critical startegies gaps for a company across its platform ?",
                badgeValue:"Strategic gaps",badgeColor:"green"},
                {text:"What are the strategic gaps for a company based on benchmarketing vs. closest competitors ? ",
                    badgeValue:"Strategic gaps",badgeColor:"green"},
                {text:" Who can potentially acquire company ?",
                    badgeValue:"Potential aquires",badgeColor:"red"},
                {text:"List of company segments that company opertate in ?",
                    badgeValue:"Profile",badgeColor:"purple"},
                {text:"List of public company comparables for a company",
                    badgeValue:"Comparables",badgeColor:"orange"},
                {text:"what is a fast path to a company ?",
                    badgeValue:"Fast Path",badgeColor:"blue"},

            ]
        }
    }


    componentDidMount() {
    }

    handleHorizontalSection(e){

        let childNode = document.getElementById("id_horizontalNvigation").childNodes;
        for(let index =0 ;index < childNode.length ; index++){
            childNode[index].classList.remove("active")
        }
        e.target.classList.add("active");


    }

    render() {
        return(
            <div className="card filter_main_card">
                <div className="pl-5 filter_main_card_content">
                    <h2>Choose from our Smart Filters</h2>
                    <p>Lorem Ipsum fds sdfs asfsa asdfa</p>

                    <ul className="flex flex-row li-style-no" onClick={this.handleHorizontalSection.bind(this)} id={"id_horizontalNvigation"}>
                        <li className="p-12 active ">Company</li>
                        <li className="p-12 ">Investor</li>
                        <li className="p-12 ">Person</li>
                        <li className="p-12 ">Sector</li>
                        <li className="p-12 ">Industry</li>
                        <li className="p-12 ">Region</li>
                    </ul>
                    {this.state.badges.map((item,index)=>{
                        return <Badge key={"badge_"+index} value={item.text} color={item.color}/>
                    })}

                    <div className={"flex flex-row flex-wrap mb-16"} id={"id_filter_card_list"}>
                    {this.state.cards.map((item,index)=>{
                        return <Card key={"card_"+index} className={"mr-25 bg-black"} badge-color={item.badgeColor} badge-value={item.badgeValue} text = {item.text}/>
                    })}
                    </div>


                </div>
            </div>
        )
    }
}