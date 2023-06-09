import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = this.refs.comment.value.trim();
    if (!comment) {
      return;
    }
    this.setState((prevState) => {
      return {
        comments: prevState.comments.concat(comment)
      };
    });
    this.refs.commentForm.reset();
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="comment-box">
        <h4>Comentarios</h4>
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Agregar comentario:</label>
            <textarea className="form-control" id="comment" rows="3" ref="comment"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        {comments.length > 0 ?
          <ul className="list-group mt-3">
            {comments.map((comment, index) => (
              <li key={index} className="list-group-item">{comment}</li>
            ))}
          </ul>
          :
          <p>Aun no hay comentarios</p>
        }
      </div>
    );
  }
}

export default CommentBox;
