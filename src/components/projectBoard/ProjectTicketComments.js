import CommentCard from './CommentCard'

const ProjectTicketComments = (props) => {
    
  return (
    <section className="ticketcomments-container">
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
          // value={lastName}
          // onChange={lastNameChange}
          required
        />
        <button>Comment</button>
      </form>
      <div className="ticketcomments-comment-list">
          {props.comments?.map((comment) => (
            <CommentCard
              key={comment.date}
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

export default ProjectTicketComments;