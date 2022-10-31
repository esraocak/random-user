import React from 'react'
import mail from "../assets/mail.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"

const Card = ({info}) => {
    const { large, title, first, last, email, cell, age, state, country, date }=info
  return (
    <div>
        <div className='container'>
            <div className='item p'><img className='photo' src={large} alt=""/></div>
            <div className='item titles'>{title} {first} {last}</div>
            <div className='item m'><img className='mail' src={mail} alt="mail" /></div>
            <div className='item email'>{email}</div>
            <div className='item c'><img className='phonep' src={phone} alt="phone" /></div>
            <div className='item phone'>{cell}</div>
            <div className='item l'><img className='locphoto' src={location} alt="navi" /></div>
            <div className='item loc'>{state} / {country}</div>
            <div className='item age'>Age:{age}</div>
            <div className='item date'>Register Date: {date?.slice(0,10)}</div>
        </div>
    </div>
  )
}

export default Card