import React, {useState} from "react";
import BirthdayEntry from "./BirthdayEntry";

const Dashboard = () =>{
    const [entry, setEntry] = useState([
        {
            name: "John Doe",
            age: 24,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU"
        },
        {
            name: "Naiden Romanov",
            age: 28,
            photo: "https://mir-s3-cdn-cf.behance.net/user/115/b02e2987434653.5978a4a039572.jpg"
        }
    ]);

    const handleClearAll = () =>{
        setEntry([]);
    }
    return(
        <div className="container">
            <h1>{entry.length} birthdays today</h1>
            {entry.map(x => <BirthdayEntry name={x.name} age={x.age} photo={x.photo} />)}
            <button type="button" onClick={handleClearAll}>Clear all</button>
        </div>
    );
}

export default Dashboard;