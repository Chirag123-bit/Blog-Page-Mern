import React from 'react'
import "./accdetail.css"
import image from "../../static/images/sample.png"

const DetailSection = () => {
  return (
    <section id="detailsSection" className='d-flex justify-content-around align-items-center mt-5'>
        <div className="left-section ">
            <div className="left-top-section mb-3">
                <div className="left-top-left">
                    <h3>Hyatt Residence</h3>
                    <h5>Deluxe Room</h5>
                </div>
                <div className="left-top-right">
                    <h4>Rs.5500/Night</h4>
                </div>
            </div>
            <div className="left-mid-section mb-3">
                <div className="feature">
                <i className="fa-solid fa-wifi"></i>
                <p>Free Wifi</p>
                </div>
                <div className="feature">
                <i className="fa-solid fa-shower"></i>
                <p>Water Facilities</p>
                </div>
                <div className="feature">
                <i className="fa-solid fa-car"></i>
                <p>Airport Pickup/Drop</p>
                </div>
                <div className="feature">
                <i className="fa-solid fa-phone"></i>
                <p>24/7 Service</p>
                </div>
                <div className="feature">
                <i className="fa-solid fa-bell"></i>
                <p>Concierge Services</p>
                </div>
            </div>
            <div className="left-bottom-section">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos similique, omnis error amet ipsa voluptates nostrum optio atque asperiores quidem accusantium architecto. Beatae, ea. Dolores temporibus distinctio quibusdam consequuntur voluptas nemo. Quas sequi dolores fugit, aliquid assumenda cumque saepe laborum odio, sapiente consectetur eaque sed officia illum eum mollitia. Beatae a ad harum voluptate nulla consequuntur quas, saepe adipisci nisi amet dolor fuga necessitatibus voluptatum? Hic beatae odio eos iste quibusdam dolores labore dicta odit quae vitae quis sed possimus delectus animi, quam a ipsa corrupti in voluptatum blanditiis provident maxime distinctio quasi molestiae. Praesentium incidunt iste autem tempore sit, provident pariatur eius vero optio. Accusamus voluptatem debitis ipsam maxime earum ab doloribus nemo obcaecati? Harum voluptate iusto ratione optio corrupti consectetur, voluptatibus nesciunt ullam facilis ad inventore tempore officia. Culpa earum placeat nesciunt voluptatum tempora neque sit deleniti accusantium quam, sequi molestias ut quibusdam eius minus quasi quas quia iure assumenda officia? Esse provident mollitia quas quos temporibus. Aut temporibus dolore, molestiae delectus animi porro eos? Eligendi voluptate optio debitis iusto quae dolorem est voluptatem natus iure quis, ipsa eveniet nisi doloremque porro repudiandae! Temporibus, perferendis obcaecati vitae, ea voluptatum vero suscipit esse consequuntur tempora quia doloribus amet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos similique, omnis error amet ipsa voluptates nostrum optio atque asperiores quidem accusantium architecto. Beatae, ea. Dolores temporibus distinctio quibusdam consequuntur voluptas nemo. Quas sequi dolores fugit, aliquid assumenda cumque saepe laborum odio, sapiente consectetur eaque sed officia illum eum mollitia. Beatae a ad harum voluptate nulla consequuntur quas, saepe adipisci nisi amet dolor fuga necessitatibus voluptatum? Hic beatae odio eos iste quibusdam dolores labore dicta odit quae vitae quis sed possimus delectus animi, quam a ipsa corrupti in voluptatum blanditiis provident maxime distinctio quasi molestiae. Praesentium incidunt iste autem tempore sit, provident pariatur 
                </p>
            </div>
        </div>
        <div className="right-section">
            <img src={image} alt="Logo"  className='img-fluid mb-4'/>
            <form method="post">
                <div className='input-group'>
                <label htmlFor="checkin">Checkin Date</label>
                <input type="date" name="checkin" id="checkin" />
                </div>
                <div className='input-group'>
                <label htmlFor="checkout">Checkout Date</label>
                <input type="date" name="checkout" id="checkout" />
                </div>
                <div className="btn-container text-center">
                    <button className='btn btn-warning text-white'>Book Now</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default DetailSection