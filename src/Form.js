import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            job: ''
        };
        this.initialState = this.state;
    }


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    // handleChange(event) {
    //     const {value, name} = event.target;    
    //     this.setState(() => {
    //       if (name === "name") {
    //         return {name: value}
    //        } else if (name === "job"){
    //           return {job: value}
    //         }
    //      })
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 
        return (
            <div>

            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange}/>
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange}/>
                <button type="submit">
                    Submit
                </button>
            </form>
        <h2>entered name is : {this.state.name} and job is : {this.state.job}</h2>
        </div>
        );
    }
}

export default Form;
