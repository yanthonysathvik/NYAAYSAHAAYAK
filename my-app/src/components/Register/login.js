import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from "react";
const Login= () => {
  const [pole, setpole] = useState(true);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const [data1, setData] = useState({ email: '', password: '' });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data1, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/login', data1)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          sessionStorage.setItem("userId", res.data.userId);
          setIsError(false);
          navigate('/');
        } else {
          setIsError(true);
          setpole(false);
        }
      })
      .catch((err) => {
        console.log({"ola":err});
        setpole(false);
      });
  };
    return ( 
        <>
<div class="bg1">


<div class="container6">
      <form class="form-1" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label for="email">Email</label>
        <input type="email"  name="email" onChange={handleChange} id="email" required />
        <label for="password">Password</label>
        <input type="password" name="password" onChange={handleChange} id="password" required />
        
              {/* <div >
                <a href="#!" style={{paddingLeft:"40px"}}>Forgot password?</a>
              </div> */}

        <button class="button5" style={{paddingLeft:"80px",paddingRight:"80px",}}>Login</button>
        {pole ? null : <p style={{ color: "red" }}>Invalid input</p>}
        {/* <p>Or SignUp Using</p> */}
        {/* <div class="icons">
          <a href="https://www.facebook.com/" target="blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/" target="blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://mail.google.com/" target="blank"
            ><i class="fab fa-google"></i
          ></a>
        </div> */}
        <div>
		<p>Dont have Account?</p>
    
		<Link to="/signin" style={{marginLeft:"180px"}}>
		<button class="button5" style={{paddingLeft:"80px",paddingRight:"80px"}}>Sign in</button>
		</Link>
    </div>
    
      </form>
    </div>
	</div>
             
        
        
        </>
     );
}
 
export default Login;