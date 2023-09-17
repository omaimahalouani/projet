import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isMadameSelected: false,
      isMonsieurSelected: false,
      name: '',
      Prenom: '',
      Age: '',
      Societe: '',
      address: '',
      postalCode: '',
      city: '',
      telephone: '', 
      email: '', 
      dateDemande: '', 
      heureDemande: '',
      siteWeb: '', 
      fichier: null, 
      sujetDemande: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      
      const formData = new FormData();
      
      
      formData.append("name", this.state.name);
      formData.append("prenom", this.state.Prenom);
      formData.append("isMadameSelected", this.state.isMadameSelected);
      formData.append("isMonsieurSelected", this.state.isMonsieurSelected);
      formData.append("Age", this.state.Age);
      formData.append("Societe", this.state.Societe);
      formData.append("address", this.state.address);
      formData.append("postalCode", this.state.postalCode);
      formData.append("city", this.state.city);
      formData.append("telephone", this.state.telephone);
      formData.append("email", this.state.email);
      formData.append("dateDemande", this.state.dateDemande);
      formData.append("heureDemande", this.state.heureDemande);
      formData.append("siteWeb", this.state.siteWeb);
      formData.append("sujetDemande", this.state.sujetDemande);
      formData.append("description", this.state.description);


      
      

      if (this.state.fichier) {
        formData.append("fichier", this.state.fichier);
      }
      
      
      fetch("URL_API", {
        method: "POST",
        body: formData,
      })
      .then((response) => {
        
        console.log("Formulaire soumis avec succès !", response);
      })
      .catch((error) => {
        
        console.error("Erreur lors de la soumission du formulaire.", error);
      });
    }
  }

  handleCancel = () => {
    this.setState({
      title: '',
      description: '',
      isMadameSelected: false,
      isMonsieurSelected: false,
      name: '',
      Prenom: '',
      Age: '',
      Societe: '',
      address: '',
      postalCode: '',
      city: '',
      telephone: '', 
      email: '', 
      dateDemande: '', 
      heureDemande: '',
      siteWeb: '', 
      fichier: null, 
      sujetDemande: '',
    });
  }



  validateForm = () => {
    const { name, email, telephone } = this.state;

    if (!name || !email) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return false; 
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Veuillez saisir une adresse e-mail valide.');
      return false; 
    }

   
    if (telephone && !/^\d{10}$/.test(telephone)) {
      alert('Veuillez saisir un numéro de téléphone valide (10 chiffres).');
      return false; 
    }

    return true; 
  }







  handleMadameChange = () => {
    this.setState((prevState) => ({
      isMadameSelected: !prevState.isMadameSelected,
      isMonsieurSelected: false,
    }));
  }

  handleMonsieurChange = () => {
    this.setState((prevState) => ({
      isMonsieurSelected: !prevState.isMonsieurSelected,
      isMadameSelected: false,
    }));
  }
  handleFileUpload = (e) => {
    const file = e.target.files[0]; 
  
    if (file) {
      
      this.setState({ fichier: file });
    } else {
      this.setState({ fichier: null });
    }
  }

  render() {
    return (
      <div>
        <h2>Veuillez remplir ce formulaire</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Informations personnelles</h3>
          <div>
            <label>Nom :</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label>Prénom :</label>
            <input
              type="text"
              value={this.state.prenom}
              onChange={(e) => this.setState({ Prenom: e.target.value })}
            />
          </div>

          <div>
            <label>Choisissez un titre :</label>
            <span>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isMadameSelected}
                  onChange={this.handleMadameChange}
                />
                Madame
              </label>
            </span>
            <span>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.isMonsieurSelected}
                  onChange={this.handleMonsieurChange}
                />
                Monsieur
              </label>
            </span>
          </div>
          <div>
            <label>Age :</label>
            <input
              type="number"
              value={this.state.Age}
              onChange={(e) => this.setState({ Age: e.target.value })}
            />
          </div>
          
          <div>
            <label>Société :</label>
            <input
              type="text"
              value={this.state.societe}
              onChange={(e) => this.setState({ Societe: e.target.value })}
            />
          </div>
          <div>
             <label>Adresse :</label>
                <textarea
                 value={this.state.address}
                 onChange={(e) => this.setState({ address: e.target.value })}
                 ></textarea>
          </div>
          

<div className="horizontal-inputs">
  <div>
    <label style={{ marginRight: '10px' }}>Code postal :</label>
    <input
      type="text"
      value={this.state.postalCode}
      onChange={(e) => this.setState({ postalCode: e.target.value })}
    />
  </div>
  <div>
    <label style={{ marginRight: '10px' }}>Ville :</label>
    <input
      type="text"
      value={this.state.city}
      onChange={(e) => this.setState({ city: e.target.value })}
    />
  </div>
</div>
    <h3>Informations de contact</h3>
         <div>
         <label>Numéro de téléphone :</label>
           <input
           type="tel"
           value={this.state.telephone}
           onChange={(e) => this.setState({ telephone: e.target.value })}
           />
          </div>

         <div>
           <label>Adresse e-mail :</label>
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
             />
        </div>
        <h3>Date et heure</h3>
        <div>
        <label>Date de la demande :</label>
           <input
             type="date"
             value={this.state.dateDemande}
             onChange={(e) => this.setState({ dateDemande: e.target.value })}
            />
        </div>
        <div>
        <label>Heure de la demande :</label>
        <input
          type="time"
          value={this.state.heureDemande}
          onChange={(e) => this.setState({ heureDemande: e.target.value })}
         />
        </div>
        <h3>Informations supplémentaires</h3>
        <div>
        <label>Site Web (URL) :</label>
        <input
         type="url"
         value={this.state.siteWeb}
         onChange={(e) => this.setState({ siteWeb: e.target.value })}
         />
        </div>
        <div>
        <label>Joindre un fichier :</label>
        <input
         type="file"
         accept=".pdf, .doc, .docx"  
         onChange={(e) => this.handleFileUpload(e)}
        />
        </div>
        <h3>Option</h3>

        <div>
  <label>Sélectionnez le sujet de votre demande :</label>
  <div>
    <label>
      <input
        type="radio"
        name="sujetDemande"
        value="Sujet A"
        checked={this.state.sujetDemande === "Sujet A"}
        onChange={(e) => this.setState({ sujetDemande: e.target.value })}
      />
      Sujet A
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="sujetDemande"
        value="Sujet B"
        checked={this.state.sujetDemande === "Sujet B"}
        onChange={(e) => this.setState({ sujetDemande: e.target.value })}
      />
      Sujet B
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="sujetDemande"
        value="Sujet C"
        checked={this.state.sujetDemande === "Sujet C"}
        onChange={(e) => this.setState({ sujetDemande: e.target.value })}
      />
      Sujet C
    </label>
  </div>
</div>


        <h3>Zone de description</h3>
          <div>
            <label>Description :</label>
            <textarea
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            ></textarea>
          </div>
          <h3>Validation</h3>
          <div>
          <button
            type="submit"
            className="create-button" 
            >
          Créer
         </button>
  <button
    type="button"
    onClick={this.handleCancel}
    className="cancel-button"
  >
    Annuler
  </button>
</div>

        </form>
      </div>
    );
  }
}

export default CreateForm;
