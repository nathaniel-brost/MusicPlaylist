import React from "react";

          {/*condition? true : falsestuff */}


const Playlist = (props) => {
    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Song</th>
                <th scope="col">Artist</th>
                <th scope="col">Something else</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Track 1</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Track 2</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>


                <ul>
                    {/* {(props.check > 0) ? props.song.map((song,i)=> <li style={{color:"grey"}}> {song.title} by {song.artist} </li>    ):null}  */}
                </ul>


    </div>
      );

}


export default Playlist;
