import React from 'react';
import Persons from './components/persons';
import './App.css';

class App extends React.Component
{
  state = {
    persons: [
      {
        id:1,
        role:'Admin',
        name:'Kome Michael',
        active:true
      }
      ,{
        id:2,
        role:'User',
        name:'Shelly Smith',
        active:true
      },
      {
        id:3,
        role:'User',
        name:'John Doe',
        active:false
      }
    ]
  }
  render(){
    return (
      <div className='App'>
        <Persons persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
