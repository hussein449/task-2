import { useEffect, useState } from "react";
import NoteList from "./NoteList";

const AllNotes = () => {
  const [Notes, setNotes] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/Notes')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setNotes(data);
      })

  }, [])
  return (
    <div className="note-home">
      <h1> this is your note for the week</h1>
      <p>{Notes && <NoteList Notes={Notes} />}</p>
      <hr></hr>
    </div>
  );
}

export default AllNotes;