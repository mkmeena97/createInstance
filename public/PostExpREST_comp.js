import { useReducer, useState } from "react"

//needed by useReducer
const initialState={
    empid:0,
    ename:"",
    sal:0,
    dept:0
}

//needed by useReducer
const reducer = (state,action)=>{
    switch (action.type){
        case 'update':
            return{...state,[action.fld]:action.value}
        case 'reset':
            return initialState    
    }
}
//useReducer and useState are features of hook's API
let EmpForm=()=> {
    const[emp,dispatch]=useReducer(reducer,initialState);
    const[msg,setMsg]=useState("")

    const submitData = (ev) =>{
        ev.preventDefault();
        //console.log(JSON.stringify(emp));
        //send data to server to insert into database
        const reqOption={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                empid:emp.empid,
                ename:emp.ename,
                sal:emp.sal,
                dept:emp.dept
            })
        }
        fetch("http://localhost:9000/insertEmp",reqOption)
        .then(res=>res.text())
        .then(data=>setMsg(data))
    }


return (
    <div>
        <h1>Emp Form</h1>
        <form>
            Enter empid :
            <input type="text" name="empid" value={emp.empid} 
            onChange={(e)=>{dispatch ({type:'update',fld:'empid',value:e.target.value})}}/>

            <br/>

            Enter ename :
            <input type="text" name="ename" value={emp.ename}
            onChange={(e)=>{dispatch({type:'update',fld:'ename',value:e.target.value})}}/>

            <br/>

            Enter Salary : 
            <input type="number" name="salary" value={emp.sal}
            onChange={(e)=>{dispatch({type:'update',fld:'sal',value:e.target.value})}}/>

            <br/>

            Enter dept :
            <input type="number" name="deptno" value={emp.dept}
            onChange={(e)=>{dispatch({type:'update',fld:'dept',value:e.target.value})}}/>

            <br/>

            <input type="submit" value="submit" 
            onClick={(e)=>{submitData(e)}}/>

            <input type="button" value="clear"
            onClick={()=>{dispatch({type:'reset'})}}/>

        </form>
        <p>{msg}</p>
    </div>
)
}
export default EmpForm;