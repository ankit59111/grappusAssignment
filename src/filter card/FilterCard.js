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

    render() {
        return(
            <div className="card filter_main_card">
                <div className="pl-5">
                    <h2>Choose from our Smart Filters</h2>
                    <p>Lorem Ipsum fds sdfs asfsa asdfa</p>

                    <ul className="flex flex-row li-style-no">
                        <li className="p-12 active ">Company</li>
                        <li className="p-12 ">Investor</li>
                        <li className="p-12 ">Person</li>
                        <li className="p-12 ">Sector</li>
                        <li className="p-12 ">Industry</li>
                        <li className="p-12 ">Region</li>
                    </ul>
                    {this.state.badges.map((item)=>{
                        return <Badge value={item.text} color={item.color}/>
                    })}

                    <div className={"flex flex-row flex-wrap mb-16"} id={"id_filter_card_list"}>
                    {this.state.cards.map((item)=>{
                        return <Card className={"mr-25 bg-black"} badge-color={item.badgeColor} badge-value={item.badgeValue} text = {item.text}/>
                    })}
                    </div>


                </div>
            </div>
        )
    }
}