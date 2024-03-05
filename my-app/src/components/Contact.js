const Contact = () => {
    return ( 
        <>
 

 <section class="contact" id="contact">
            <div class="heading text-center">
                <h2>Contact Us</h2>
                <p>Feel free to get in touch for any questions or inquires. We would more than happy to assist you!</p>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="title">
                        <h3>Contact detail</h3>
                    </div>
                    <div class="content">
                        
                        <div class="info">
                            <i class="fas fa-mobile-alt"></i>
                            <h4 class="d-inline-block">PHONE:
                                
                                <span>+12457836913 , +12457836913</span></h4>
                        </div>
                        <div class="info mail">
                            <i class="far fa-envelope"></i>
                            <h4 class="d-inline-block">EMAIL:
                                
                                <span>nyaayshayak@info.com</span></h4>
                        </div>
                        
                        <div class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 class="d-inline-block">ADDRESS:
                                <span>
                                    kmit,hyderabad,india telangana,52451</span></h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">
                    <form>
                        <div class="row">
                            {/* <div class="col-sm-12">
                                <input type="text" class="form-control" placeholder="Name"></input>
                            </div> */}
                            <div class="col-sm-12 ">
                                <input type="text" class="form-control" placeholder="Email"></input>
                            </div>
                            <div class="col-sm-12">
                                <input type="text" class="form-control" placeholder="Subject"></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <button class="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        
    </section>







    <footer class="footer1">
        <p>&copy; 2023 Nyaay Sahaayak Services</p>
    </footer>
    </>

     );
}
 
export default Contact;
 