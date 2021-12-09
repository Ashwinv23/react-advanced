import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((ppl) => {
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
