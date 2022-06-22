const CommentCard = (props) => {
  
  console.log(props.author)
  
  return(
    <article>
      <h5>{props.author} - {props.date}</h5>
      <p>{props.comment}</p>
    </article>
    )
 }
 
 export default CommentCard;