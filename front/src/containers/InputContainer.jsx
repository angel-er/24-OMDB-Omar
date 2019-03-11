import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import axios from 'axios'

import Input from '../components/Input'
import Movies from '../components/Movies'

export default class InputContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            title:'',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({target}){
        var val = target.value
        this.setState({
            title: val
        })
    }
    
    handleSubmit(e){       
        e.preventDefault()
        axios.get('https://www.omdbapi.com/?apikey=20dac387&s=' + this.state.title)
        .then(movies => {
            console.log('MOVIES', movies)
            this.setState({
                movies : movies.data.Search
            })
        })
    }

    render() {
        
        return (
            <div>
                <Input
                    onChange = {this.handleChange}
                    estado = {this.state.title}
                    onSubmit = {this.handleSubmit}
                />
                <Movies movies= {this.state.movies}/> 
            </div>
        )
    }
}
