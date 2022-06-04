import "../bootstrap-5.1.3-dist/css/bootstrap.css"
import { useEffect, useState } from "react";

import { db } from '../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";




function PlaceHolder () {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [time, setTime] = useState('');
    const [trains, setTrains] = useState([]);


    const addTrain = async () => {
        const docRef = await addDoc(collection(db, "Trains" ), {
            
            start: start,
            end: end,
            time: time,

        }).then(() => {
            alert("Scheduled The Time");
            clearTexts();
        }).catch(() => {
            alert("Please Try Again !")
        });
    }

    const updateTrain = async () => {
        const docRef = await updateDoc(doc(db, "Trains" , ), {
            
        })
    }

    const deleteTrain = async () => {
        await deleteDoc(doc(db, "Trains",  ))
            .then(() => {
                alert("Schedule Deleted !")
            }).catch(() => {
                alert("Delete Failed !")
            });
    }

    useEffect(() => {
        getTrains();
    }, []);

    const getTrains = async () => {
        const querySnapshot = await getDocs(collection(db, "Trains" ));
        setTrains(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
    }
   


    const clearTexts = () => {
        setStart('');
        setEnd('');
        setTime('');
       
    }

   
    
    
    
    
    return(
        <div>
            <div class="start">
            <label for="formGroupExampleInput" class="form-label">Start Station</label>
            <input type="text" value={start} onChange={(e) => { setStart(e.target.value) }} 
             class="form-control" id="formGroupExampleInput" placeholder="ex : Colombo"/>
            </div>
            <div class="end">
            <label for="formGroupExampleInput2" class="form-label">End Station</label>
            <input type="text" value={end} onChange={(e) => { setEnd(e.target.value) }}  class="form-control" id="formGroupExampleInput2" placeholder="ex : Kandy"/>
            </div>
            <div class="time">
            <label for="formGroupExampleInput2" class="form-label">Time</label>
            <input type="text" value={time} onChange={(e) => { setTime(e.target.value) }}  class="form-control" id="formGroupExampleInput2" placeholder="00:00"/>
            </div>

            <button type="button" class="btn btn-primary" style={{ marginLeft: 10 }} onClick={addTrain}>Save Schedule</button>
            

            <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Start Station</th>
                                    <th scope="col">End Station</th>
                                    <th scope="col">Start Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    trains.map(trains => {
                                        return (
                                            <tr>
                                                <td>{trains.start}</td>
                                                <td>{trains.end}</td>
                                                <td>{trains.time}</td>
                                                <div><button type="button" class="btn btn-danger" style={{   marginLeft: 20 }} onClick={deleteTrain}>Delete Schedule</button>
                                                <button type="button" class="btn btn-warning" style={{ marginLeft: 30 }} onClick={updateTrain}>Update Schedule</button></div>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
        
    )
}
export default PlaceHolder