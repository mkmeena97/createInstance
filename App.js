
import './App.css';
import logo from './logo.svg';
import './App.css';
import './styles/mystyle.css'
import Greet from './component/GreetFC';
import GreetCC from './component/GreetCC';
import LogoComponent from './component/LogoComponent';
import { One, TimeComponent, Two, Upper } from './component/PropFC';
import Clock from './component/ClockComponent';
import { StatefulClsComp, StatefulClsComp1 } from './component/StatefulClsComp'
import Mystyle from './component/Styling';
import BootstrapStyle from './component/Bootstrapstyle';
import StatefulFunComp, { StatefulFunComp1 } from './component/StatefulFunComp';
import 'bootstrap'
import { Link, Route, Routes } from 'react-router-dom';
import { AboutComp, Contact, HomeComp, ServiceComp } from './component/HomePageComp';
import GetExpREST_Comp from './component/GetExpREST_Comp';
import EmpForm from './component/PostExpREST_comp';
import FormValidation from './component/FormValidation_Comp';
import ExamForm from './component/StudentForm_054';


function App() {
  return (
    <div >
        <div className='clock-header'>
            <TimeComponent></TimeComponent>
            <Clock ></Clock>

        </div>

        <div className='main-header'>
            <LogoComponent></LogoComponent>

        </div>
      

        <div className='App'>
            <Greet></Greet>
            <GreetCC></GreetCC>
        </div>
        
       {/*
          </div>
           React Props(properties) 
        <div className='new-header'>
               <One name="Mahendra" age="24"></One>
               <Two name="Nikhil"></Two>
        
               <Upper></Upper>
               <Upper name="mahendra" age="18"></Upper>
        </div>   

          
        <div className='container-fluid bg-primary'> 
            <ul className='nav navbar'>
                <li className='nav item'>
                  <StatefulClsComp></StatefulClsComp>
                </li>
               <li className='nav item'><StatefulFunComp></StatefulFunComp></li>
            </ul>  
        
        </div>   
      
        <div className='new-header'>  
            <ul className='nav navbar'>
              <li className='nav item'><StatefulClsComp1 name="Mahendra"></StatefulClsComp1></li>
              <li className='nav item'><StatefulFunComp1></StatefulFunComp1></li>

           
            
            </ul> 
            
            
        </div>   

         
        <div style={{backgroundColor:"gainsboro"}}>
            <Mystyle></Mystyle>
            <BootstrapStyle></BootstrapStyle>
        </div>

              */} 

      <div className='container my-div'>
        <ul className='nav navbar'>
            <li className='nav item'>
              <Link to="/home" style={{textDecoration:"none"}}><h3 className='text-shadow'>Home</h3></Link>
            </li>
            <li className='nav item'>
              <Link to="/about" style={{textDecoration:"none"}}><h3 className='text-shadow'>About</h3></Link>
            </li>
            <li>
             <Link to="/services" style={{textDecoration:"none"}}><h3 className='text-shadow'>Services</h3></Link>
            </li>
            <li>
             <Link to='/contact' style={{textDecoration:"none"}} ><h3 className='text-shadow'>Contact</h3></Link>
            </li>
            <li>
              <Link to='/getexprest' style={{textDecoration:"none"}} ><h3 className='text-shadow'>Get EMP(REST API)</h3></Link>
            </li>
            <li>
              <Link to='/postexprest' style={{textDecoration:"none"}} ><h3 className='text-shadow'>insert Emp(REST API)</h3></Link>
            </li>
            <li>
              <Link to='/PostExpRestAfterValidation' style={{textDecoration:"none"}} ><h3 className='text-shadow'>insert Validate Emp(REST API)</h3></Link>
            </li>
            <li>
              <Link to='/examform' style={{textDecoration:"none"}} ><h3 className='text-shadow'>Exam Form</h3></Link>
            </li>
        </ul>

        <Routes>
          <Route path='/home' element={<HomeComp></HomeComp>} ></Route>
          <Route path='/services' element={<ServiceComp></ServiceComp>}></Route>
          <Route path='/about' element={<AboutComp></AboutComp>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/getexprest' element={<GetExpREST_Comp></GetExpREST_Comp>}></Route>
          <Route path='/postexprest' element={<EmpForm></EmpForm>}></Route>
          <Route path='/PostExpRestAfterValidation' element={<FormValidation></FormValidation>}></Route>
          <Route path='/examform' element={<ExamForm></ExamForm>}></Route>
        </Routes>      

      </div>
 
    </div>
  );
}

export default App;
