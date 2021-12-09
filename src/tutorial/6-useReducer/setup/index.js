import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  let [modal, setModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setModal(true);
      setPeople([...people, { id: new Date().getTime(), name }]);
    } else {
      setModal(true);
    }
  };

  return (
    <>
      {modal && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type='submit'>Add</button>
      </form>
      {people.map((ppl) => {
        return (
          <div>
            <h4>{ppl.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
