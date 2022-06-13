import React from 'react';

const Card = (props) => {
  return(
    <div className="card-container">
      <h1>{props.issueTitle}</h1>
      <p>{props.description}</p>
    </div>
    )
}

export default Card;