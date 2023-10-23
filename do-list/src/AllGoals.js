import { useEffect, useState } from "react";
import "./AllGoals.css";
const AllGoals = () => {
    const [noteData, setNoteData] = useState([]); 
       useEffect(() => {
        // Fetch your JSON data containing goals.
        fetch('http://localhost:3000/Goals')
            .then(res => res.json())
            .then(data => {
                setNoteData(data);
            })
            .catch(error => {
                console.error('Error loading data:', error);
                setNoteData([]);
            });
    }, []);
   
      // const noteText = JSON.stringify(noteData, null, 2);
      
    return ( 
        <div className="table">
        <h1>All Goals</h1>
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {noteData.map((goal) => (
              <tr key={goal.id}>
                <td>{goal.id}</td>
                <td>{goal.Date}</td>
                <td>{goal.goal}</td>
                {/* Add more table data (td) elements as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     );
}
 
export default AllGoals;