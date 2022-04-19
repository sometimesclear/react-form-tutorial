import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'BoA',
        job: 'Dancer',
      },
      {
        name: 'Youra',
        job: 'Designer',
      },
      {
        name: 'DH',
        job: 'Developer',
      },
      {
        name: 'Yowon',
        job: 'Actor',
      },
    ]
    
    return (
      <div className='container'>
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App
