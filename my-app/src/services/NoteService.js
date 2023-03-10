import axios from 'axios'

const url = "http://localhost:8080/api/notes/"

class NoteService {

   getNotes(){
    return axios.get(url);
   }
   
   createNote(note){
      return axios.post(url, note);
   }

   getById(id){
      return axios.get(url + '/' + id);
   }
   updateNote(note, id){
      return axios.put(url + '/' + id , note);
   }
   deleteNote(id){
      return axios.delete(url + '/ '+ id);
   }
}

// export object instead of class

export default new NoteService();