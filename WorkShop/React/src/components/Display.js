import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/display.css'

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/anime')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleUpdate = async (id) => {
     let name = prompt("Enter new name");
     let gen = prompt("Enter new genre");
     let epi = prompt("Enter new epi");
     let dat = prompt("Enter new dat");
     let don = prompt("Enter new don");

     let newData = {
      sNo : id,
      aname : name , 
      episodes : epi,
      genre  : gen ,
      target_date  : dat,
      is_done  : don 
     }

     console.log(newData);
     
     await axios.put("http://localhost:8080/api/anime/" + id, newData);
     console.log(34234);
     window.location.reload();
  };

  const handleDelete = async (id) => {
    let res = await axios.delete("http://localhost:8080/api/anime/" + id);
    console.log(res);
    window.location.reload();
     
  };

  return (
    <div>
      <h1>HERE'S YOUR LIST!!!!</h1>
      <table>
        <thead>
          <tr>
            <th>sNo</th>
            
            <th>aname</th>
            <th>episodes</th>
            <th>genre</th>
            <th>isDone</th>
            <th>targetDate</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.sNo}>
              <td>{item.sNo}</td>
              
              <td>{item.aname}</td>
             
              <td>{item.episodes}</td>
              
              <td>{item.genre}</td>
              
              <td>{item.is_done}</td>
              <td>{item.target_date}</td>
              
              <td><button onClick={() => handleDelete(item.sNo)}>Delete</button></td>
              <td><button onClick={() => handleUpdate(item.sNo)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;