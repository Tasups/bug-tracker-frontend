const CommentCard = (props) => {
  
  return(
    <article className="commentcard-container">
      <div>
        <h5>{props.author} - {props.date}</h5>
        <p>{props.comment}</p>
      </div>
    </article>
    )
 }
 
 export default CommentCard;