import * as React from 'react';
import Form from './Form';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }
    render() {
        return <Form onSubmit={this.onSubmitForm} >
            <input type="text" name="email" placeholder="Email" onChange={(e) => this.onInputChange(e)} />
            <input type="number" name="mobile" placeholder="Mobile" onChange={(e) => this.onInputChange(e)} />

            {/* check if user typed email has gmail render adding age field to the form */}
            {this.state["email"] != null && this.state["email"].indexOf('gmail') &&
                <input type="number" name="age" placeholder="Age" onChange={(e) => this.onInputChange(e)} />
            }

            {this.state.error != null && <p>{this.state.error}</p>}
        </Form>
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateForm = () => {
        if (this.state["email"] != null && this.state["email"] != "" && this.state["mobile"] != null && this.state["mobile"] == "") {
            //check further here for any additional conditions


            //if all good
            this.setState({ error: null })
        } else {
            this.setState({ error: 'Please Fill all required Details' })
            return false
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.validateForm) {
            console.log("Email:" + this.state[email] + " Password:" + this.state[mobile]);
            //same way you get all values in the state for age etc & conditionally handle it
        }
    }
}



export default Register;