import React, {useState} from 'react'
import './form.css'
import Eyeicon from '../assets/eye-fill.svg'
import Eyeofficon from '../assets/eye-off-fill.svg'
const Form = () => {

/**Input field states */    
const [fullName, setFullName] = useState("")
const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")
const [dateofBirth, setDateOfBirth] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

{/**Show password state */}

const [showPassword, setshowPassword] = useState(false)


{/**handleShowPassword function */}

const handleShowPassword = () =>{
    setshowPassword(!showPassword)
}
  return (
    <div className='formInput'>
        <form>
        <h1>Register</h1>
        {/**Full Name field */}
            <div className='form'>
                <label>Full Name</label>
                <input 
                type='text'
                placeholder='John Doe'
                pattern="^[A-Za-z]{3,16}$"
                required/>
            <span>Your name should be 3-16 characters with only letters </span>
            </div> 
            {/**User Name field */}
            <div className='form'>
                <label>User Name</label>
                <input 
                type='text'
                placeholder='JohnDoe1'
                pattern='^[A-Za-z0-9]{3,16}$'
                required
                />
            <span>Your username can contain all characters and should be 3-16 characters</span>
            </div> 
            {/**Email address field */}
            <div className='form'>
                <label>Email address</label>
                <input 
                type='email'
                placeholder='JohnDoe@gmail.com'
                required
                />
            <span>This not a valid email address</span>
            </div> 
            {/**Date of Birth field */}
            <div className='form'>
                <label>Date of Birth</label>
                <input 
                type='date'
                />
            </div> 
            {/**Password field */}
            <div className='password'>
            <div className='password-input'>
                <label>Password</label>
                <input placeholder='Enter a strong password' 
                type={(showPassword === true)? "text": "password"}
                onChange={(e)=>setPassword(e.target.value)}
                pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$'
                required
                />
            <span>A strong password should have atleast one <br /> uppercase and lowercase letter, one number and any <br /> special character and should be atleast 8 characters</span>
            </div>
         </div>
            <div className='password-eye'>
               {(showPassword === true)? <img src={Eyeicon} onClick={handleShowPassword}/>:<img src={Eyeofficon} onClick={handleShowPassword}/>}
            </div>
            {/**Confirm Password filed */}
            <div className='confirmPassword'>
                 <label>Confirm Password</label>
                 <input placeholder='confirm your password' 
                 type='password'
                 onPaste={(e) =>{
                    e.preventDefault()
                    return false
                    }} 
                 pattern={password}
                 required/>
            <span>Passwords does not match</span>
            </div>
         {/** Submit Button */}
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Form