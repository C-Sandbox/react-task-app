/* eslint-disable no-useless-constructor */
import React from 'react';  
import DeleteBtn from './DeleteBtn';
import uniqid from "uniqid";

const Overview = (props) => {
  const { items, deleteFunc } = props;
  return (
    <ul>
      {items.map((item, i) => {
         const btnID = uniqid();
         const divID = btnID + item.id;
        return (
        <div key={divID}>
          <div key={item.id}><DeleteBtn key={btnID} clickFunc={deleteFunc} passedID={item.id} /> {i + 1}. {item.text}</div>
        </div>
        )
      })}
    </ul>
  );
};

export default Overview;