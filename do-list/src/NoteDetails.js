import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const NoteDetails = () => {
     const [Details, setDetails] = useState('');
    const{id}= useParams();
    useEffect(() => {
        fetch('http://localhost:8000/Notes/'+id )
          .then(res => {
            return res.json();
          })
          .then(data => {
              setDetails(data);
           
          })
         
      }, [id])
    return ( 
        
        <div className="note-Details">
           <h2> Note details - {id}</h2>
            <p>Title: {Details.title}</p>
            <p>Content: {Details.body}</p>
           
            </div>
     );
}
 
export default NoteDetails;