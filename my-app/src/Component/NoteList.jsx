import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import NoteService from '../services/NoteService';
import Nav from './Nav';

class NoteList extends Component{
   
    
    constructor(props){
        super(props);
        this.state = { notes:[]};
        this.addNote= this.addNote.bind(this);
    }

    deleteN(id){
        NoteService.deleteNote(id).then( res=>{
            this.setState({notes : this.state.notes.filter(notes => notes.id !== id)
            })
        });
    }

    componentDidMount(){
        NoteService.getNotes().then((res) =>{
            this.setState({notes : res.data});
        }); 
    }
    
    addNote(){
        this.props.history.push('/add');
    }

  
    render(){
        
        return(
            <div class="container-xxl position-relative p-0">
               <Nav />
              
              <div className='container-xxl py-5 bg-primary hero-header mb-5'>
               <h1 className="text-center text-white mb-4 animated zoomIn" style= {{paddingTop: '3rem', paddingBottom:'3rem'}}> Complaint Box</h1>
               <div className="row">
               
            <button className='btn btn-info text-white mb-4 animated zoomIn'  ><Link to="/add" className='text-white mb-4 animated zoomIn' >Add Complaint</Link></button> 
               </div>
               <div className="row">
               <div class="table-responsive-lg">
                <table className="table table-stripped table-bordered table-hover table-responsive">
                <thead>
                    <tr style={{color : 'yellow'}}>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Complaint</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                 <tbody>
                        {
                            this.state.notes.map(
                                notes =>
                                <tr style={{color : 'orange'}} key= {notes.id}>
                                    <td>{notes.id}</td>
                                    <td>{notes.title}</td>
                                    <td>{notes.content}</td>
                                    <td>{notes.createdAt}</td>
                                    <td>{notes.updatedAt}</td>
                                    <td>
                                        <div className='row'>
                                            <div className='col-md-6'> 
                                        <button  className='btn btn-info btn-sm'><Link to={{pathname: `/update/${notes.id}`}}>Update</Link></button>
                                        </div>
                                        <div className='col-md-6'> 
                                        <button  className='btn btn-danger btn-sm' onClick={()=>{this.deleteN(notes.id)}} >Delete</button>
                                        </div>
                                        </div>
                                    </td>  

                                </tr>
                            )
                        }
                 </tbody>
                </table>
                </div>
               </div>
               </div>
           </div>
           );
    }
}
export default NoteList;