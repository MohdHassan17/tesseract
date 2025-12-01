import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const sendEmail = (form) => {
  const notify = () => toast.success('Message Sent Successfully');

  emailjs
    .sendForm('service_4y2yxr4', 'template_4pzh0nt', form.current, {
      publicKey: 'Ce0CfIdr7hLaGT4nE',
    })
    .then(
      () => {
        notify();
        form.current.reset(); // Clears the form after the email is sent
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};

