import React from 'react';

const Card = (props) => {
  return(
    <div>
      <h1>Title: {props.issueTitle}</h1>
      <p>Description: {props.description}</p>
    </div>
    )
}

export default Card;