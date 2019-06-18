import React from 'react';
import './Login.css'
import { FormControl } from 'react-bootstrap'

class Login extends React.Component {

    render() {
        return (
            <div className='login-container'>
                <div style={{color:'transparent',
            cursor:'default'}}>sadas</div>
                    <div id='formContent'>
                        <h1>Login</h1>
                        
                            <FormControl id='formControl'
                                type="text"
                                value=''
                                placeholder="Username"
                            // onChange={this.handleChange}
                            />

                            <FormControl id='formControl'
                                type="text"
                                value=''
                                placeholder="Password"
                            // onChange={this.handleChange}
                            />
                            <br></br>
                            <button id='button' onClick={this.props.click} >Login</button>
                        
                        <div className="formFooter">
                    </div>
                    </div>


                   

                </div>

        )
    }
}
export default Login;