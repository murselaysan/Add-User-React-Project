import React, { Component } from 'react';
import Table from "./Table";
import Form from "./Form";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     users : [
          {
            name: 'Charlie',
            job: 'Janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspring actress',
          }
        ]
  }
}


handleSubmit=(data)=>{
  // const newUser = {
  //   name: data.name,
  //   job:data.job
  // }
  this.setState({users : [...this.state.users, data]})
}

    render() {
        return (
            <div className="container">
                <h1>React List</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Form handleSubmit={this.handleSubmit}/>
                <Table users={this.state.users}/>
                <Progress
  theme={{
    success: {
      symbol: '🏄‍',
      color: 'rgb(223, 105, 180)'
    },
    active: {
      symbol: '😀',
      color: '#fbc630'
    },
    default: {
      symbol: '😱',
      color: '#fbc630'
    }
  }}
/>
            </div>
        )
      }
}

export default App;
