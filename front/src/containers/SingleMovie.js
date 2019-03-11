import React, { Component } from 'react';
import axios from 'axios';

export default class SingleMovie extends Component {
    constructor(props){
        super(props)
        this.state= {
           singleMovie :{}

        }
    }

    componentDidMount(){
        axios.get(`https://www.omdbapi.com/?apikey=92d57093&t=${this.props.movieName}`)
       .then((singleMovie) => {
           this.setState({
               singleMovie : singleMovie.data
            })
       })
            
    
    }
    // {Title: "Batman v Superman: Dawn of Justice", Year: "2016", imdbID: "tt2975590", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYz…WJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}

    render(){
        console.log('reconociendo los props', this.props)
        const {singleMovie} = this.state
        return(
            <div>
                <img style = {{float: 'left'}} src={ this.state.singleMovie.Poster } />
                <div style = {{float: 'left', margin: '30px' }}>
                    <p><b>Title: </b>{ singleMovie.Title }</p>
                    <p><b>Type: </b>{ singleMovie.Type }</p>
                    <p><b>Year: </b>{ singleMovie.Year }</p>
                    <p><b>Codigo: </b> { singleMovie.imdbID }</p>
                    <div>
                        <button>Add to Favorites</button>
                    </div>
                </div>
            </div>
        )
    }
}
