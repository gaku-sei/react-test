import React, {Component} from 'react';
import {RaisedButton, TextField} from 'material-ui';
import UiComponent from 'components/UiComponent';

class Box extends Component {
  state = {comments: []};

  async loadComments() {
    const data = await fetch(this.props.url);
    const comments = await data.json();
    this.setState({comments});
  }

  componentDidMount() {
    this.loadComments();
    setInterval(::this.loadComments, this.props.interval);
  }

  render() {
    return <div className="commentBox">
      <h1>Commentaires</h1>
      <List comments={this.state.comments} />
      <Form />
    </div>;
  }
}

class List extends Component {
  render() {
    const comments = this.props.comments.map(comment => (
      <Comment author={comment.author}>{comment.text}</Comment>
    ));
    return <div className="commentList">{comments}</div>;
  }
}

class Form extends UiComponent {
  createComment(e) {
    e.preventDefault();
    const author = this.refs.author.getValue().trim();
    const text = this.refs.author.getValue().trim();
    if(author && text) {
      // Post comment
      this.refs.author.setValue('');
      this.refs.text.setValue('');
    }
  }

  render() {
    return <form className="commentForm" onSubmit={::this.createComment}>
      <TextField hintText="Votre Nom" ref="author" /><br />
      <TextField hintText="Votre Commentaire" multiLine={true} ref="text" /><br />
      <RaisedButton type="submit" label="Poster" primary={true} />
    </form>;
  }
}

class Comment extends Component {
  render() {
    return <div className="comment">
      <h2 className="commentAuthor">{this.props.author}</h2>
      {this.props.children}
    </div>;
  }
}

export default {Comment, Box, List, Form};
