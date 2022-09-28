import { Component } from "react";
import "./todo.css";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      list: [],
      alert: false,
    };
  }

  handleChange=(e) =>{
    this.setState({ task: e.target.value });
    // Suivre les éléments saisie par l'utilisateur
  }

  // fonction pour supprimer tout les éléments 
  supprimerTout=(e) =>{
    this.setState({list:[]})
  }
// fonction pour supprimer l'élement en personne par le billet de l'index car c'est unique
  supprimerUn=(index) =>{
    let {list:taskList}=this.state;
    taskList.splice(index,1);
    this.setState({list:taskList});
  }
/**
 * 
 * @param {*} e 
 */
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.task);
    let tab = this.state.list;
    tab.push(this.state.task);
    this.setState({ list: tab });
    console.log(this.state.list);
    this.setState({ task: "" });
  };
  

  render() {
    let { list } = this.state;
    return (
      <body>
              <div  className="card w-50 mx-auto shadow-sm bg-white text-white
      // my-5" >
        <div className="card-header">
        <h2 class="fw-bold text-black text-center">Votre calendrier:</h2>
        </div>
      <div className="card-body">
      <form onSubmit={this.handleSubmit} className="my-3">

            <input
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Ajouter votre tache"
                  type="text"
                  value={this.state.task}
                />
          <div class="d-grid gap-2">
          <button className="btn btn-sm btn-outline-primary mx-1">Ajouter</button>
          </div>
        </form>

        <h2 class="fw-bold text-black" >Votre liste:</h2>
        <ul class="text-secondary">
        
          {list.map((item, index) => {
            return <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>{item} <button className="btn btn-sm btn-outline-warning mx-1" onClick={() => {
                this.supprimerUn(index);
              }}>X</button></li>;
          })}
        </ul>
      </div>
  
        <div className="card-footer">
          <div  class="d-grid gap-2">
          <button className="btn btn-sm btn-outline-danger mx-1 "
        onClick={this.supprimerTout}>Supprimer tout</button>
          </div>
        </div>
      </div>
      </body>



    );
  }
}

