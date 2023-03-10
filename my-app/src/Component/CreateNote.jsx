import React, { Component } from 'react';
import NoteService from '../services/NoteService';
import { Link, Navigate } from 'react-router-dom';
import Nav from './Nav';
class CreateNote extends Component{

    constructor(props){
        super(props);
        this.state = { 
            title: '',
            content: ''
        };
        this.changeContent = this.changeContent.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        
    }

    changeTitle = (e)=>{
            this.setState( 
                {title: e.target.value}
            )
    }
    

    changeContent = (e)=>{
        this.setState( 
            {content: e.target.value}
        )
}
   save = (e)=>{
     e.preventDefault();
    let Note = {
        title: this.state.title, 
        content: this.state.content
    };
   console.log('note =>' + JSON.stringify(Note));
   NoteService.createNote(Note);   

}    
   

    render(){
        return(
            <div class="container-xxl position-relative p-0">
            <Nav />
            <div className='container-xxl py-5 bg-primary hero-header mb-5'>

        <div>
            <div className='container' style= {{paddingTop: '3rem', paddingBottom:'3rem'}}>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3' >
                        <h2 className="text-center  mb-4 animated zoomIn" >Add Complaint</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Title</label>
                                    <input placeholder='title' name='Title' className='form-control' value={this.state.title} onChange={this.changeTitle}/>
                                    
                                </div>
                                <div className='form-group'>
                                    <label>Content</label>
                                    <input placeholder='content' name='Content' className='form-control' value={this.state.content} onChange={this.changeContent}/>
                                    <button className='btn btn-success' onClick={this.save.bind(this)} >Save</button>
                                    <button className='btn btn-danger'><Link to="/">Back</Link></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>);
        
    }
}
export default CreateNote;