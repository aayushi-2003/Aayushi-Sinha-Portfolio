import React, { useRef, useState } from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import emailjs from '@emailjs/browser';
import {BiLogoGithub} from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs';

// service_74cq0ey
const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    user_name: '',
    user_mail: '',
    user_message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange= (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]:value});
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_74cq0ey', 'template_dtzc84m',
    formRef.current, 'hNpfc_f__ZSyKTZBF')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          alert("Thank You! Your message has been sent.");
          setForm({
            user_name: '',
            user_mail: '',
            user_message: '',
          })
      }, (error) => {
        setLoading(false);
          console.log(error.text);
          alert("Something went wrong");
      });  
    }


    return (
      <div id="contact" className="lg:section py-16">
        <div className="container mx-auto">
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-0'>
            <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} className='flex-1 flex items-center justify-center'>
              <div >
                <h4 className='text-xl uppercase font-medium mb-2 tracking-wide'>Get In Touch</h4>
                <div className='flex gap-10 lg:gap-3 flex-row lg:flex-col'>
                <h2 className='text-[45px] lg:text-[80px] leading-none mb-4'>Let's work<br/>together</h2>
                <div className='media-icons flex gap-3'>
                  <a href="https://github.com/aayushi-2003"><BiLogoGithub className='h-10 w-10 hover:text-sky-400'/></a>
                  <a href="https://www.linkedin.com/in/aayushi1207/"><BsLinkedin className='h-9 w-9 hover:text-sky-400 '/></a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.form ref={formRef} onSubmit={sendEmail}
             variants={fadeIn('left', 0.3)} 
             initial="hidden" whileInView={'show'} 
             viewport={{once:false, amount: 0.3}} 
             className='flex-1 border rounded-2xl flex flex-col gap-y-6 mx-10 pb-12 mb-16 p-6 items-start'>
              <input type="text" 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all' 
              placeholder='Your Name'
              name='user_name'
              value={form.user_name}
              onChange={handleChange}/>
              <input type="text" 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all' 
              placeholder='Your email'
              name='user_mail'
              value={form.user_mail}
              onChange={handleChange}/>
              <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-blue-500 transition-all resize-none mb-12' 
              placeholder='Your message'
              name='user_message'
              value={form.user_message}
              onChange={handleChange}
              ></textarea>
            <button className='btn btn-lg' type='submit' value='Send' >{loading?'Sending...':'Send Message'}</button>
            </motion.form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;