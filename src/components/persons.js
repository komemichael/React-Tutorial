import React from 'react';
import Person from './person';

class Persons extends React.Component
{
  render(){
    return this.props.persons.map((person) => 
    (
      <Person key={person.id} person={person}/>
    ));
  }
}
export default Persons;
