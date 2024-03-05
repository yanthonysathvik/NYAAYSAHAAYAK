import { Link } from "react-router-dom";

const MyNav = () => {
    return (
        <>
        <div>
         <header>
            <h1 class="pad">NYAAY SAHAAYAK</h1>
             {/* <div class=' align-self-end '>
        <Link  to="/login">
            <button type="button" >Login</button>
            
         </Link>
        </div>  */}
        </header>
        
        
        <nav class="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>
            <Link class="navbar-brand" style={{leftpadding:'10x'}} to="/"></Link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                     
                </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0 ul list">
                    <li class="nav-item   col link">
                        <Link class=" col  " to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>
                    {/* <li class="nav-item link">
                        <Link class=" col" to="/services">Services</Link>
                    </li> */}
                    {/* <li class="nav-item link">
                        <Link class=" col" to="/about">About Us</Link>
                    </li> */}
                    
                    {/* <li class="nav-item link">
                        <Link class=" col" to="/contact">Contact Us</Link>
                    </li> */}

                        <li class="nav-item dropdown"> 
                            {/* <a class="nav-link dropdown-toggle col" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                            <a class=" dropdown-toggle link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                FAQs
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <Link class="dropdown-item" to="/KeyFeatures/LawTypes">Lawtypes</Link>
                                <Link class="dropdown-item" to="/components/FAQs">frequently asked questions</Link>
                                
                                {/* <li><button class="dropdown-item" href="#">Another action</button></li> */}
                                {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        {/* <Link  to="/About us">
                            <button class="nav-item" >Login</button>
                         </Link>  */}
                          {/* <li class="nav-item link">
                        <Link class="col" to="/About">About Us</Link>
                    </li> */}
                    
                    <li class="nav-item link">
                        <Link class="col" to="/login">Login</Link>
                    </li>   
                     <li class="nav-item link">
                        <Link class=" col" to="/contact">Contact Us</Link>
                    </li> 
{/* 
                         <li class="nav-item link">
                        <Link class="col" to="/login">Login</Link>
                    </li>    */}
                    <li class="nav-item link">
                        <Link class="col" to="/Feedback">Feedback</Link>
                    </li>   
                <div>

                </div>
                   
                </ul>
            </div>
        

        {/* <div class=' align-self-end '>
        <Link  to="/logout">
           <Link to="/">
            <button class="nav-item" >Logout</button>
            </Link>
            
         </Link>
        </div> */}



        </nav>
        </div>
        



















        </>
      );
}
 
export default MyNav ;