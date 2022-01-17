import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Playlist from './Playlist';
import NowPlaying from './NowPlaying';
import Filter from './Filter';


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
        <Navigation/>
      
        <main>
          
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                Now Playing
              </div>
              <div class="col">
                Filters
              </div>
              <div class="col">
                Playlist
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <NowPlaying songs={this.state.songs}/>
               
              </div>
              <div class="col">
                <Filter />
              </div>
              <div class="col">
                <Playlist 
                check={this.state.songs.length}
                songs={this.state.songs}/>
                
              </div>
            </div>
            <div class="row align-items-end">
              <div class="col">
                One of three columns
              </div>
              <div class="col">
                One of three columns
              </div>
              <div class="col">
              <ul>
                Nothing here            
            </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
 


export default App;
