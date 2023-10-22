import { Link , useHistory} from "react-router-dom";

const NoteList = ({ Notes }) => {
    const History = useHistory();
    
    const handleClick= (id)=>{
   fetch('http://localhost:8000/Notes/'+ id ,{
    method:'DELETE'
   }).then(()=>{
 History.push('/');
   })
    }
    return (

        <div className="Note-list">
            {Notes.map(note => (
                <div className="Note-preview" key={note.id} >
                    <Link to={`/Notes/${note.id}`}>
                        <h2>{note.title}</h2>
                        <p> {note.body}</p>
                        <button  className="btnote"onClick={ ()=>handleClick(note.id)}>delete</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}




export default NoteList;