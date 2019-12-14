import React, {Component} from 'react';
import './SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "mon@email.com",
            name: "James",
            lastname: "Bond",
            password: "MyPassword",
            passwordConfirmation: ""
        
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state)
    }
    
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }


    handleSubmit = (event) => {
        event.preventDefault()
    }
    
  
    render() {
    return(
    <div>
            <h5>
                <ul>
                    <li>{this.state.email}</li>
                    <li>{this.state.name}</li>
                    <li>{this.state.lastname}</li>
                    <li>{this.state.password}</li>
                    <li>{this.state.passwordConfirmation}</li>
                </ul>
            </h5>
            <form onSubmit={this.handleSubmit}>

                <label><h4>Email</h4></label>
                <input type="email" name="email" onChange={(event) => this.handleUserInput(event)} /><br/>
                
                <label>Name</label>
                <input type="text" name="name" onChange={(event) => this.handleUserInput(event)} /><br/>
                
                <label>Last Name</label>
                <input type="text" name="lastname" onChange={(event) => this.handleUserInput(event)} /><br/>

                <label>Password</label>
                <input type="password" name="password" onChange={(event) => this.handleUserInput(event)}/><br/>
                
                <label>Password confirmation</label>
                <input type="password" name="passwordConfirmation" onChange={(event) => this.handleUserInput(event)}/><br/><br/>
                
                <input type="submit" value="Submit" /> 
            
            </form> 
    </div>
    );
  }

}




export default SignUp