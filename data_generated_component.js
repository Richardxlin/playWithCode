import React from 'react';

class DataGeneratedComponents extends React.Component {
  constructor(){
    super();
    this.state = {data:[
      {id:1, name: "David Baily"},
      {id:2, name: "John Snow"},
      {id:3, name: "Roy Rogers"},
      {id:4, name: "Kevin Lars"},
      {id:5, name: "Harry Sawyer"},
      {id:6, name: "Keith Moss"},
      {id:7, name: "Joe Smoe"},
    ]}
  }

  render(){
    let rows = this.state.data.map(
      (person) => <PersonRow key={person.id} data={person} />
    );

    return <table className="table">
      <tbody>{rows}</tbody>
      </table>
  }
}


const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}


export default DataGeneratedComponents
