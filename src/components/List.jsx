/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const List = (props) => {
  const { people } = props;

  return (
    <div>
      {people.map((person, index) => (
        <article className='person' key={index}>
          <img src={person.image} alt="" />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years old</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default List;
