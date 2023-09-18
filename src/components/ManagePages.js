import React, { Component } from 'react';

class ManagePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      link: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
   
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>  Gérer une nouvelle page</h2>
        <form onSubmit={this.handleSubmit}>
        <h3>Titre</h3>
          <div>
            <label>Titre :</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <h3>Description</h3>
          <div>
            <label>Description :</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <h3>URL</h3>
          <div>
            <label>URL de la page :</label>
            <input
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit"
                   className="create-button" >Créer la page</button>
        </form>
      </div>
    );
  }
}

export default ManagePages;
