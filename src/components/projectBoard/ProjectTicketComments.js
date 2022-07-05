import CommentCard from './CommentCard'

const ProjectTicketComments = (props) => {
  
  return(
    <section className="ticketcomments-container">
      <div className="ticketcomments-title">
        <h4>Comments</h4>
      </div>
      <form>
        <label htmlFor="comment" hidden="hidden">Comment</label>
        <input 
          required
          type="text"
          id="comment"
          name="comment"
          placeholder="write comment here"
          onChange={props.commentChange}
          value={props.newComment}
        />
        <button onClick={props.addNewComment}>Comment</button>
      </form>
      <div className="ticketcomments-comment-list">
          {
            props.comments?.map((comment) => (
              <CommentCard
                key={comment.id}
                author={comment.author}
                comment={comment.comment}
                date={comment.date}
                className="ticketcomments-comment-item"
              />
            ))
          }
      </div>
    </section>
    )
}

export default ProjectTicketComments;