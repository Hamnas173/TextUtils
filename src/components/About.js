import React from 'react'

export default function About(props) {
 
  // const[myStyle,setMyStyle] = useState({
  //   color:"black",
  //   backgroundColor:"white"
  // })
  let myStyle ={
    color: props.mode === 'dark'? 'white' : '#042743',
    backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
   
  }
  
  return (
    <div className="container">
      <h1 className='my-3' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>About Our Company</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
            At TextUtils, we provide top-notch solutions tailored to our clients' needs. Founded in 2024, we've grown from a small startup to an industry leader, thanks to our commitment to innovation, quality, and customer satisfaction.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Mission and Values</strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Our mission is to revolutionize the [industry/sector] with exceptional value, cutting-edge technology, and unparalleled customer service. We prioritize collaboration, integrity, and continuous improvement to create a positive impact on the community and environment.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Meet Our Team</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Our team at TextUtils consists of passionate professionals and experts. From customer support to engineering and marketing, each member is dedicated to delivering the best outcomes for our clients, driving our company's success and innovation
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
