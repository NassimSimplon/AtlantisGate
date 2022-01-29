import React, { useState } from 'react'
import { addContact } from '../redux/Contact/Action'
import { useDispatch } from 'react-redux'
const Contact = () => {
  const [contact, setContact] = useState({
    nom: '',
    email: '',
    telephone: ''
  })
  const dispatch = useDispatch()
  const addOne = () => {
    dispatch(addContact(contact))
  }
  return (
    <div id='signinsec'>

      <div className="login-box mt-3" id='contactus'>
        <h2 className='signin-title mt-3'>للتواصل
        </h2>
        <br />
        <form onSubmit={addOne}>
          <div className="user-box mt-5">
            <input type="text" name="" required onChange={(e) => setContact({ ...contact, nom: e.target.value })} />
            <label className='text-right' id='contact-name-label'> الاسم</label>
          </div>
          <div className="user-box mt-5">
            <input type="text" name="" required onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            <label id='contact-label'> البريد الإلكتروني</label>
          </div>
          <div className="user-box mt-5">
            <input type="text" name="" required onChange={(e) => setContact({ ...contact, telephone: e.target.value })} />
            <label id='contact-all-label' > رقم الهاتف</label>
          </div>

          <a className='submit mt-5'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <input type='submit' value='إرسال' id='fasakh' />
          </a>
        </form>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Contact
