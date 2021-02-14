import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Form_component extends Component {
    constructor(props) {
        super(props);

        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeCaption = this.onChangeCaption.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            caption: '',
            url: ''
        }
        
    }

    onChangeOwner(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeOwner(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeCaption(e) {
        this.setState({
            caption: e.target.value
        });
    }
    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const meme = {
            name: this.state.name,
            caption: this.state.caption,
            url: this.state.url,
        };
        axios.post('https://localhost:8081/memes/', meme)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            caption: '',
            url:''
        })
    }
    render() {
        return (
            <div>
                <div id="meme_form">
                <h2>Meme Stream</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group  col-md-6">
                        <label className="form_tag">Meme Owner</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeOwner} required  placeholder="Enter your full name"/>
                    </div>
                    <div className="form-group  col-md-6">
                        <label className="form_tag" >Caption</label>
                        <input type="text" className="form-control" value={this.state.caption} onChange={this.onChangeCaption} required placeholder="Be creative with the caption"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label className="form_tag" >Meme URL</label>
                        <div className="single_line">
                            <input type="text" className="form-control" value={this.state.url} onChange={this.onChangeUrl} required placeholder="Enter URL of your meme here"/>
                            <button id="" type="submit" className="btn btn-primary">Submit Meme</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr className="fancy-line"></hr>
              
        </div>
        )
    }
}