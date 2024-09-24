// import React from 'react'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Email() {

//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm('service_6365jdo', 'template_y1da1fr', form.current, {
//           publicKey: 'vQRSOmVSKnrmyCeOG',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     };

//   return (
//     <div>
//         <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </div>
//   )
// }
