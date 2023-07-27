import React, { useRef } from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import emailjs from '@emailjs/browser';

// service_74cq0ey
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_74cq0ey', 'template_dtzc84m', form.current, 'hNpfc_f__ZSyKTZBF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });  
    }
    const mailSubmit = ()=>{
      alert('Your message has been sent!');
    }

    return (
      <div id="contact" className="lg:section py-16">
        <div className="container mx-auto">
          <div className='flex flex-col lg:flex-row'>
            <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} className='flex-1 flex items-center justify-center'>
              <div>
                <h4 className='text-xl uppercase font-medium mb-2 tracking-wide'>Get In Touch</h4>
                <h2 className='text-[45px] lg:text-[80px] leading-none mb-12'>Let's work<br/>together</h2>
              </div>
            </motion.div>
            <motion.form ref={form} onSubmit={sendEmail}
             variants={fadeIn('left', 0.3)} 
             initial="hidden" whileInView={'show'} 
             viewport={{once:false, amount: 0.3}} 
             className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
              <input type="text" 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all' 
              placeholder='Your Name'
              name='user_name'/>
              <input type="text" 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all' 
              placeholder='Your email'
              name='user_mail'/>
              <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all resize-none mb-12' 
              placeholder='Your message'
              name='user_message'></textarea>
            <button className='btn btn-lg' type='submit' value='Send' onClick={mailSubmit}>Send Message</button>
            </motion.form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;