import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedbackType: 'General',
    message: ''
  });

  const[submitted , setSubmitted] = useState(false);

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData({...formData , [name]:value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log('Form Submitter ' , formData);

    setFormData({
      name:'',
      email: '',
      phone: '',
      feedbackType: '',
      message: ''
    });

    setSubmitted(true);
  }
  return (
    <>
      <div className='circle'></div> {/* Circle as fixed background */}
      <div className='rectangle'></div>
      <div className='contact'>
        <div className='getInTouch'>
          <p className='getInTouchText'>Get In Touch..</p>
          <p className='contact_details'>Contact Information:
            <br/>Email : cagsupport2024@gmail.com
            <br/>Phone : +91 1234567890
          </p>
        </div>
        

          {submitted ? (
              <div className='submitted_event'>
                <p>Thanks for your feedback!</p>
              </div>
            ) : (
              <div className='feedbackform'>
                <p className='feed_text'>Send us a message</p>
                <div className='feedback'>
                  <form onSubmit={handleSubmit}>

                  <div className='formDiv1'>
                      <div className='nameDiv1'>
                        <label htmlFor='name'>Name : </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                      </div>
                      
                      <div className='nameDiv2'>
                        <label htmlFor="email">Email Address (Optional):</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div className='formDiv1'>
                      <div className='nameDiv3'>
                        <label htmlFor="phone">Phone (Optional):</label>  
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
                      </div>

                      <div className='nameDiv4'>
                        <label htmlFor="feedbackType">Feedback Type:</label>
                        <select id="feedbackType" name="feedbackType" value={formData.feedbackType} onChange={handleChange}>
                          <option value="General">General Feedback</option>
                          <option value="Bug">Bug Report</option>
                          <option value="Feature">Feature Request</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    
                    <div className='nameDiv5'>
                      <label htmlFor="message">Feedback Message:</label>
                      <textarea id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    <div className='nameDiv6'>
                      <button type="submit">Submit Feedback</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
        
      </div>
      
    </>
  )
}

export default Contact
