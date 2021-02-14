import React, { Component } from 'react';
import axios from 'axios';


function ShowMemes(props) {
    const list = props.temp_list.map((current) => (
        <div key={current._id} className="card">
            <div className="card-body">
                <div id="meme_info"> 
                    <h5 className="card-title">{current.name}</h5>
                    <p className="card-text time">
                        <small className="text-muted">Date</small>
                    </p>
                </div>
                <p className="card-text">{current.caption}</p>
                <img className="card-img-bottom"
                    src={current.url}
                    alt="Card image cap" />
            </div>
        </div>
    ))
    return (list)
}

export default class List_component extends Component {
    constructor(props) {
        super(props);
        this.state = { memeInfo: [] };
    }
    componentDidMount() {
        axios.get('https://localhost:8081/memes/')
            .then(response => {
                this.setState({ memeInfo: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
                <ShowMemes temp_list={this.state.memeInfo} />
            
        )
    }
}