import './App.css';
import { Route,Routes } from 'react-router-dom';
import Law from './components/law';
import MyNav from './components/MyNav';
import Services from './components/Services';
import Contact from './components/Contact';
import MyChatbot from './components/chatB/Chat1';
import About  from './components/About';
import Feedback from './components/Feedback'; 
import LawTypes from './components/KeyFeatures/LawTypes';
import Constitution from './components/KeyFeatures/lawtypes/Constitution';
import Criminal from './components/KeyFeatures/lawtypes/Criminal';
// import Civil from './components/KeyFeatures/lawtypes/Civil';
import Corporate from './components/KeyFeatures/lawtypes/Corporate';
import Cyber from './components/KeyFeatures/lawtypes/Cyber';
import Environmental from './components/Environmental';
import Family from './components/KeyFeatures/lawtypes/Family';
import Intellectual from './components/KeyFeatures/lawtypes/Intellectual';
import Labor from './components/KeyFeatures/lawtypes/Labor';
import Tax from './components/KeyFeatures/lawtypes/Tax';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import FAQ from './components/FAQs/FAQ';
import Login from './components/Register/login';
import Signin from './components/Register/Signin';
import Float from './components/FloatButton/Float';
import LegalAdvice from './components/KeyFeatures/LegalAdvice'    

function App() {
  return (
    <div className="App">

      <MyNav/>
      {/* <law/> */}
    
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        
         <Route path='/' element={ <Law/> }/> 
         <Route path='/About' element={ <About/> }/>  
         <Route path='/Feedback' element={ <Feedback/> }/>  
         <Route path='/Services' element={ <Services/> }/> 
         <Route path='/Contact' element={ <Contact/> }/> 
         <Route path='/Chatbot' element={ <MyChatbot/> }/>
         <Route path='/KeyFeatures' element={<KeyFeatures/>}></Route>
         <Route path='/KeyFeatures/lawTypes' element={ <LawTypes/>}/>
         <Route path='/Constitution' element={ <Constitution/>}/>
         <Route path='/Civil' element={ <civil/>}/>  
         <Route path='/Corporate' element={ <Corporate/>}/>
         <Route path='/Criminal' element={ <Criminal/>}/>
         <Route path='/Cyber' element={ <Cyber/>}/>
         <Route path='/environment' element={ <Environmental/>}/>
         <Route path='/Family' element={ <Family/>}/>
         <Route path='/intellectual' element={ <Intellectual/>}/>
         <Route path='/labor' element={ <Labor/>}/>
         <Route path='/tax' element={ <Tax/>}/>
         <Route path='/FAQs' element={<FAQ/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/bot' element={<Float/>}/>
         <Route path='/legaladvice' element={<LegalAdvice/>}/>
         

      </Routes>

    </div>
  );
}

export default App;