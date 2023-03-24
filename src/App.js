import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TabletoXlsx from './components/TabletoXlsx';

function App() {

  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const columns = ['Name', 'Age', 'Email'];

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'name') {
      setName(value);
    } else if (name === 'age') {
      setAge(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleAddRow = () => {
    const newData = [...data, { Name: name, Age: age, Email: email }];
    setData(newData);
    setName('');
    setAge('')
    setEmail('');
  };

  const handleClearTable = () => {
    setData([])
  }

  return (
    <>

      <div className='container'>

        <div className='col'>
          <div className='app-container'>
            <div className='form-container'>

              <div>
                <label>Name:</label>
                <input type="text" name='name' value={name} onChange={handleInputChange} />
              </div>


              <div>
                <label>Age:</label>
                <input type="text" name='age' value={age} onChange={handleInputChange} />
              </div>

              <div>
                <label>Email:</label>
                <input type="text" name='email' value={email} onChange={handleInputChange} />
              </div>

              <div className='button-container'>
                <button className='addbtn' onClick={handleAddRow}>Add Row</button>
                <button onClick={handleClearTable}>Clear Table</button>
              </div>

            </div>
          </div>
        </div>

        <div className='col'>
          <div className='table-container'>
            <TabletoXlsx data={data} columns={columns} filename="myTable"/>
          </div>
        </div>
      </div>

      {/* <TabletoXlsx /> */}
    </>
  );
}

export default App;
