import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
       title:'',
       content:''
    }
    handleSubmit = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleChange = (e) => {
        e.preventDefault();
    }
  render() {
    return (
      <div className = "container">
        <form onSubmit={this.handleSubmit} className = "white">
            <h5 className="grey-text text-darken-3">Create new project</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange= {this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Project content</label>
                <textarea id="content" className="materialize-textarea" onChange= {this.handleChange}></textarea>
            </div>
            <div className="button btn pink lighten-1 z-depth=0">Create</div>
        </form>
      </div>
    )
  }
}

export default CreateProject
