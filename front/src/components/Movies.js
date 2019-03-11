import React from 'react';
import {Link } from 'react-router-dom';

export default ({movies}) => {
      return (
        <div>
            <ul>
                {movies.map((movie) => 
                    <div key={movie.imdbID}>
                        <Link to={`/${movie.Title}`}>
                            <li>{movie.Title}</li>
                            <img src = { movie.Poster}/>
                        </Link>
                    </div>
                )}
            </ul>
            
        </div>
    )
}