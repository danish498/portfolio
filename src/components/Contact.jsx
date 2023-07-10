import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './common/Button';

const Contact = () => {
  const [loading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_izqoken',
        'template_qmvvses',
        form.current,
        'Ufk4HNTKSx0flAqSP'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      user_name: '',
      user_email: '',
      message: '',
    });
  };

  const handleDownload = () => {
    const fileUrl = 'images/__danishResume.pdf';
    window.open(fileUrl, '_blank');
  };

  return (
    <div
      id='contact'
      className='min-h-screen pt-20 h-full bg-cover sm:min-h-0'
      style={{
        backgroundImage:
          'linear-gradient(to left, rgba(245,245,245, 0.8) , rgba(255,255,255,1) 35%), url("images/bg.svg")',
        backgroundImage: `url("images/bg.svg")`,
      }}
    >
      <div className='flex flex-col items-center '>
        <h1
          className='  text-4xl uppercase font-bold pt-10 pb-3 tracking-wide'
          id='project'
        >
          Contact
        </h1>

        <p className='text-center text-gray-600 text-lg md:text-xl  px-7 lg:px-48 w-auto block mb-5 '>
          Download the resume or feel free to fill the form to contact me
        </p>
      </div>

      <div className='lg:w-4/5  p-10 lg:px-28 mx-auto  '>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-500 font-semibold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className=' appearance-none border rounded w-full py-4 px-3 bg-gray-200 focus:border-mediumturquoise text-gray-700 leading-tight focus:outline-none'
              id='name'
              type='text'
              name='user_name'
              placeholder='Enter your name'
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-500 font-semibold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className=' appearance-none border rounded w-full py-4 px-3 bg-gray-200 focus:border-mediumturquoise text-gray-700 leading-tight focus:outline-none'
              id='email'
              type='email'
              name='user_email'
              placeholder='Enter your email'
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-500 font-semibold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className=' appearance-none border rounded w-full py-4 px-3 bg-gray-200 focus:border-mediumturquoise text-gray-700 leading-tight focus:outline-none'
              id='message'
              name='message'
              rows='6'
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {success ? (
            <div className='flex items-center justify-center mb-6'>
              <h1 className='text-mediumturquoise font-semibold'>
                Your message has been send.
              </h1>
            </div>
          ) : (
            ''
          )}
          <div className='flex items-center justify-end'>
            <Button
              className='font-semibold text-lg uppercase px-12 py-3'
              type='submit'
            >
              Submit
            </Button>
          </div>

          <h2 className='w-full text-center border-b-2 border-mediumturquoise mb-10 mt-0'>
            <span className='bg-white px-4 relative top-3 '>OR</span>
          </h2>

          <div
            id='resume'
            className='flex  md:flex-row flex-col md:items-center gap-2  justify-start'
          >
            <h1 className='text-xl mb-2'>You can download the resume here</h1>
            <Button className=' uppercase' onClick={handleDownload}>
              Resume
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
