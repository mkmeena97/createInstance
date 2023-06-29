import React from "react"
function One (ps){
    return(
        <div>
            <h3>
                Welcome {ps.name}
            </h3>
            <p>Age : {ps.age}</p>
        </div>
    )
}
class Two extends React.Component
{
    render(){
        return (
            <div>
                <h3>
                    Welcome : {this.props.name} 
                </h3>
            </div>
        )
    }
}
let TimeComponent=()=>{
    var cdate=new Date();
    var arr=["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return(
        <div>
            <p>
                {cdate.getDate()+"-"+arr[cdate.getMonth()]+"-"+cdate.getFullYear()}
            </p>
        </div>
    )
}

Upper.defaultProps={
    name:"Tez",
    age:"24"
}
function Upper(props){
    return(
        <div>
            <h4>{props.name.toUpperCase()}</h4>
            <p>Age : {props.age>18?"Valid":"Invalid"}</p>
        </div>
    )
}


export {One,Two,TimeComponent,Upper};