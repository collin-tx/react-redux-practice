import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  
  state = {
    title: ''
  }
 
  handleChange = e => {
    this.setState({ [e.target.id] : e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title }); // action dispatched
    this.setState({ title: ''}) // just clears inputs
  }

  render(){
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit">save</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;