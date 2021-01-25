import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    return (
        <tbody>
          {props.users.map((item,index)=>{
            return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.job}</td>
          </tr>
          })}
        </tbody>
      )
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody users={this.props.users}/>
        </table>
      )
    }
  }

export default Table;