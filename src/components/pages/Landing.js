import Giphy from './Giphy'
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm'
import {useState} from 'react'

const Landing =(props)=> {
    const [hasAccount, setHasAccount] = useState(false)
    const {setUser} = props

    return(
       <div>
           <Giphy />
            <h1 className="text-success">Landing Page</h1>
            {hasAccount === false ? (
            <div>
                <RegisterForm setUser={setUser} />
                <p>Are you already a member? <span className="btn btn-info" onClick={() => setHasAccount(true)}>Login</span></p>
                </div>
                ) : <LoginForm setUser={setUser} />}
      </div>
    )
}
export default Landing;