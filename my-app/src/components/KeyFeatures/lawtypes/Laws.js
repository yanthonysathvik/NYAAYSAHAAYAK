
import MyCarousel from "./MyCarousel";
import MySearch from "./MySearch";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Footer from "./KeyFeatures/lawtypes/Footer";
import Float from "./FloatButton/Float";
 
const Law = () => {
    return ( 
        
        <>
         
        <MySearch/>
        <MyCarousel/>
        <KeyFeatures/>
        <Footer/>
        
        <div>
        <Float/>


            
        </div>
    
        </>
    );
}

export default Law;