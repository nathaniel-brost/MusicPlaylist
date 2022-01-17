import React from "react";

          {/*condition? true : falsestuff */}


const Playlist = (props) => {
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Song</th>
                <th scope="col">Artist</th>
                <th scope="col">Album</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                
                </tr>
                {(props.songs.length > 0) ? props.songs.map((song,i)=> <tr key={i}> <td>{song.id}</td><td>{song.title}</td>  <td>{song.artist}</td> <td>{song.album}</td> </tr>    ):null} 

            </tbody>

            </table>





    </div>
      );

}


export default Playlist;
