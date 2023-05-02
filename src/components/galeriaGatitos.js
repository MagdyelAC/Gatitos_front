import React, { Component } from 'react';
import GatitosDataService from "../services/gatitos.service";
import Reacciones from "./reacciones";
import Comentarios from "./comentarios";

export default class GatitosList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveGatitos = this.setActiveGatitos.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      gatitoList: [],
      currentGatitos: null,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = GatitosDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let gatitoList = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      gatitoList.push({
        id: id,
        title: data.title,
        url: data.url,
        description: data.description,
        published: data.published,
      });
    });

    this.setState({
      gatitoList: gatitoList,
    });
  }

  refreshList() {
    this.setState({
      currentGatitos: null,
    });
  }

  setActiveGatitos(gatitos) {
    this.setState({
      currentGatitos: gatitos,
    });
  }

  render() {
    const { gatitoList, currentGatitos } = this.state;

    return (
      <div className="gallery">
        {currentGatitos ? (
          <div>
            
            <div>
              <h4>{currentGatitos.title}</h4>
              <img className="firebase-image" src={currentGatitos.url} alt={currentGatitos.title} />
              <p>{currentGatitos.description}</p>
            </div>
            <div>
                <Reacciones />
                <Comentarios/>
            </div>
            
            <div className='divButton'>
              <button className='buttonStl' onClick={this.refreshList}>Regresar</button>
            </div>
          </div>
        ) : (
          gatitoList &&
          gatitoList.map((gatito) => (
            <div className="gallery-item" key={gatito.id}>
              <h4>{gatito.title}</h4>
              <img src={gatito.url} alt={gatito.title} onClick={() => this.setActiveGatitos(gatito)} />
            </div>
          ))
        )}
      </div>
    );
  }
}
