import CommentCard from '../projectBoard/CommentCard'

const TicketsComments = (props) => {
  
  return (
    <section className="ticketsboardcomments-container">
      <div className="ticketcomments-title">
        <h4>Comments</h4>
      </div>
      <form>
        <label htmlFor="comment" hidden="hidden">
          Comment
        </label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="write comment here"
          onChange={props.commentChange}
          value={props.newComment}
          required
        />
        <button onClick={props.addNewComment}>Comment</button>
      </form>
      <div className="ticketcomments-comment-list">
        {props.comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            author={comment.author}
            comment={comment.comment}
            date={comment.date}
            className="ticketcomments-comment-item"
          />
        ))}
      </div>
    </section>
  );
}

export default TicketsComments;