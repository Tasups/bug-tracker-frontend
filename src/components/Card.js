import React from 'react';

const Card = (props) => {
  return(
    <div>
      <h1>{props.issueTitle}</h1>
      <p>{props.description}</p>
    </div>
    )
}

export default Card;