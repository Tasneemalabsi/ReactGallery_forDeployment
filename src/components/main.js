import React from "react";
import data from "../data.json";
import Gallery from "./gallery"

class Main extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         counter: 0
    //     }
    // }
    //  updateState = ()=> {
        
    //     this.setState({counter: this.state.counter + 1})
    // }
    render(){
        return (
            <div style={{ display:"flex", justifyContent: "space-between", marginTop:"30px" }}>
                {data.map((item,i)=>{
                    return(
                    <Gallery key={i}
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            />
                    )
                })}
            </div>
        )
    }
}
export default Main