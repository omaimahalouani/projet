import React, { Component } from 'react';

class CreatePage extends Component {
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
        <h2>Créer une nouvelle page</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Titre :</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description :</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <label>URL de la page :</label>
            <input
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Créer la page</button>
        </form>
      </div>
    );
  }
}

export default CreatePage;
