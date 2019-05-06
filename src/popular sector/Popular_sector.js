import React from "react";
import Badge from "../badges/Badge";
import "./Popular_sector.css"

export default class PopularSector extends React.Component{
    constructor(props){
        super(props)

        this.state={
            badges:["Enterprise Infrastructure","Enterprise Software","AI & Analytics",
                "Internet of Things","Fintech","Industrial Tech"],
            enterprise:["networking ","server & system",
                "storage","Application Development" ,"Cyber security"],
            software:["AdTech","Ar/Vr","Blockchain","Digital Marketing","Communication","Management"],
            AI:["Artificial Intelligence","Management & Analytics"],
            IOT:["Devices & Platform","Auto","Consumer","Commercial Buliding","Industrial","Smart City"]
        }
    }

    render() {
        return(
            <div className="card" id={"id_section2_body"}>
                <div className="pl-5 section2_filter_main_card">
                <h3>Discover the popular sector we track</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    {this.state.badges.map((item,index)=><Badge key={"badges_"+index}className="filter_card" value={item} color={"white"}/>)}
                    <div className={"flex flex-row flex-wrap w-97 mb-16"}>
                        <div className="card enterprise filter_main_card w-40">
                            <h4 className={"show w-100"}><span className="circle"></span>Enterprise Infrastructure<span
                                className={"f-right"}>View Industries</span></h4>
                            {this.state.enterprise.map((item,index) => {
                                return (<React.Fragment key={"enterprise0_"+index}>
                                    <Badge className="filter_card mt-0" value={item}
                                           color={"rgb(168,168,168)"}><span className={"circle"}></span></Badge>
                                </React.Fragment>)}
                            )}
                        </div>
                        <div className="card enterprise filter_main_card w-40">
                            <h4 className={"show w-100"}><span className="circle"></span>Enterprise Software<span
                                className={"f-right"}>View Industries</span></h4>
                            {this.state.software.map((item,index) => <Badge key={"software_"+index} className="filter_card mt-0" value={item}
                                                                    color={"rgb(168,168,168)"}/>)}
                        </div>
                        <div className="card enterprise filter_main_card w-40">
                            <h4 className={"show w-100"}><span className="circle"></span>AI & Analytics<span
                                className={"f-right"}>View Industries</span></h4>
                            {this.state.AI.map((item,index) => <Badge key={"AI_"+index} className="filter_card mt-0" value={item}
                                                              color={"rgb(168,168,168)"}/>)}
                        </div>
                        <div className="card enterprise filter_main_card w-40">
                            <h4 className={"show w-100"}><span className="circle"></span>Internet of Things<span
                                className={"f-right"}>View Industries</span></h4>
                            {this.state.IOT.map((item,index) => <Badge key={"IOT_"+index} className="filter_card mt-0" value={item}
                                                               color={"rgb(168,168,168)"}/>)}
                        </div>
                        <div className="card enterprise filter_main_card w-40">
                            <h4 className={"show w-100"}><span className="circle"></span>Industrial Tech<span
                                className={"f-right"}>View Industries</span></h4>
                            {this.state.enterprise.map((item,index) => <Badge key={"enterprise_"+index} className="filter_card mt-0" value={item}
                                                                      color={"rgb(168,168,168)"}/>)}
                        </div>
                        <div className="card enterprise filter_main_card w-40">
                            <h4 className={"show w-100"}><span className="circle"></span>Retail & Ecommerce Tech<span
                                className={"f-right"}>View Industries</span></h4>
                            {this.state.enterprise.map((item,index) => <Badge key={"enterprise2_"+index} className="filter_card mt-0" value={item}
                                                                      color={"rgb(168,168,168)"}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}