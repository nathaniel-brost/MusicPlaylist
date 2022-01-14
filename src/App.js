import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {  
      songs: [],
    }
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = async () => {
    await axios
      .get('http://www.devcodecampmusiclibrary.com/api/music')
      .then((res) => {
        console.log(res);
        const songs = res.data;
        this.setState({ songs: songs });
      });
  }



  render() { 
    return ( 
      <div>
        <main>
          {/*condition? true : falsestuff */}

          {(this.state.songs.length > 0) ? <> <h1 style={{color:"grey"}}>{this.state.songs[0].title}</h1></>: <p>nada</p>}
          <ul>
          {(this.state.songs.length > 0) ? this.state.songs.map((song)=> <li style={{color:"grey"}}> {song.title} </li>    ):null}

          </ul>
        </main>
      </div>
    );
  }
}
 


export default App;
