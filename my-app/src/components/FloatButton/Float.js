import { Link } from "react-router-dom";
const Float = () => {
    return ( 
    <>

{/* <div id="sy-whatshelp">
  <div class="sywh-services">
    <a href="" class="messenger" data-tooltip="Livechat" data-placement="left" target="_blank">
      <i class="fa fa-comments"></i>
    </a>
    <a href="" class="whatsapp" data-tooltip="WhatsApp" data-placement="left" target="_blank">
      <i class="fa fa-whatsapp"></i>
    </a>
    <a href="" class="call" data-tooltip="Call" data-placement="left">
      <i class="fa fa-phone"></i>
    </a>
  </div>
  <a class="sywh-open-services" data-tooltip="Contact Us" data-placement="left">
				<i class="fa fa-comments"></i>
    <i class="fa fa-times"></i>
  </a>
</div> */}


<div class="floating-container">
  <div class="floating-button">+</div>
   <div class="element-container">
      <span class="float-element tooltip-left">
      <i class="material-icons">phone</i>
     </span>
     <Link to="./contact">
      <span class="float-element">
      <i class="material-icons">email</i>
    </span>
    </Link>
    <Link to="/chatbot">
      <div class="float-element">
      <i class="material-icons">chat</i>
    </div>
    </Link>
   
  </div>
</div>
  
    
    
    </>



     );
}
 
export default Float;