import emailjs from '@emailjs/browser';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import AppWrap from '../../wrapper/AppWrap';
import './Kontakt.scss';
import SuccessAlert from './successAlert';
import SuccessDialog from './successDialog';


const Card = props => (
  <div className="card">
    {props.children}
  </div>
);



const TextInput = props => (
  <div className="text-input">
    <label
      className={(props.focus || props.value !== '') ? 'label-focus' : ''}
      htmlFor={props.name}>{props.label}</label>
    <input
      className={(props.focus || props.value !== '') ? 'input-focus' : ''}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur} />
  </div>
);

const TextArea = props => (
  <div className="text-area">
    <label
      className={(props.focus || props.value !== '') ? 'label-focus' : ''}
      htmlFor={props.name}>{props.label}</label>
    <textarea
      className={(props.focus || props.value !== '') ? 'input-focus' : ''}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur} />
  </div>
);
const Button = props => (
  <button className="button" onClick={props.handleSubmit}>{props.children}</button>
);


const Kontakt = () => {
  const [name, setName] = useState({ name: 'name', label: 'Name*', value: '', focus: false });
  const [email, setEmail] = useState({ name: 'email', label: 'Email*', value: '', focus: false });
  const [message, setMessage] = useState({ name: 'message', label: 'Nachricht*', value: '', focus: false });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut"
  };
    const form = useRef();
    function validateEmail(email) {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegex)) {
        return true;
      } else {
        return false;
      }
    
    }

    const handleSubmit = e => {
      var validationCount = 0
      e.preventDefault();
    
      if(name.value ===  ''  || message.value ===''  || email.value===''){
        validationCount++;
        setError('Bitte alle Felder ausfüllen!')
      }else if (validateEmail(email.value)){
      }else{    
        validationCount++;
        setError('Bitte tragen Sie eine gültige Mail ein!')}
      if(validationCount===0){
        emailjs.send("service_dyobz7r","template_valdfzd",{
          name: name.value,
          email: email.value,
          message: message.value,
          }, '-7_XcIjuL_PwX7u4R');
        
        setSuccess(true)
        setName({...name, focus: false, value:''})
        setEmail({...email, focus: false, value:''})
        setMessage({...message, focus: false, value:''})
        setError('')
      }
    };

  const handleFocus = (e) => {
    const targetName = e.target.name;
    if (targetName === 'name') {
      setName({ ...name, focus: true });
    } else if (targetName === 'email') {
      setEmail({ ...email, focus: true });
    } else {
      setMessage({ ...message, focus: true });
    }
  };

  const handleBlur = (e) => {
    const targetName = e.target.name;
    if (targetName === 'name') {
      setName({ ...name, focus: false });
    } else if (targetName === 'email') {
      setEmail({ ...email, focus: false });
    } else {
      setMessage({ ...message, focus: false });
    }
  };

  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    if (targetName === 'name') {
      setName({ ...name, value: targetValue });
    } else if (targetName === 'email') {
      setEmail({ ...email, value: targetValue });
    } else {
      setMessage({ ...message, value: targetValue });
    }
  };

  return (
      <div className="kontakt_session">
<div className="kontakt_head_text">
  <p>
    Haben wir ihr interesse geweckt?
  </p>
  <h2> Kontaktieren Sie uns direkt!</h2>
</div>
    <div className="container">
      <div className='container__wrapper'>
      <Card>
        <form className="form" ref={form} onSubmit={handleSubmit}>
          <TextInput {...name} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
          <TextInput {...email} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
          <TextArea {...message} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
            <p style={{color: "red"}}>{error ? error : ''}</p>
          <Button onClick={handleSubmit}>Absenden</Button>
        </form>
      </Card>
      <div className="divider"/>
      <div className="right_text">
        <p>Oder besuchen Sie uns doch einfach direkt!</p>
        <motion.div
        transition={{
          y: transitionValues,
        }}
        animate={{
          y: ["0.5rem", "1rem"],
        }}
        >
        <Link to="UeberUns">
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 90 }}/>
        </Link>
        </motion.div>
      </div>
      </div>
      <SuccessDialog open={success} handleClose={() => setSuccess(false)}/>
    </div>
  </div>
  )
}

export default AppWrap(Kontakt, 'Kontakt')