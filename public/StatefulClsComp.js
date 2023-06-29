import React from "react";
import 'bootstrap'

class StatefulClsComp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:1
        }
    }
        render()
        {
            return(
                <div>
                    <p>Count:{this.state.count}</p>
                    <button className="btn btn-sm" onClick={()=>{
                        this.setState({count:this.state.count+1})
                    }}>Increase</button>
                </div>
            )
        }
    }
    class StatefulClsComp1 extends React.Component{
        constructor(props){
            super(props);
           this.state={ name:"Tez"}  //initiallization
        }
        render(){
            return(
                <div>
                    <p>Name :{this.state.name}</p>
                    <button className="custom-btn-size" style={{width:"100px",fontSize:"small",height:"50px"}} onClick={()=>{this.setState({name:this.props.name})}}>Change name</button>
                </div>
            )
        }
    
    }

   

export {StatefulClsComp,StatefulClsComp1};