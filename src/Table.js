import axios from "axios";
import { useEffect, useState } from "react";
import "./Table.css";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tableRows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.age}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.gender}</td>
      <td>{user.username}</td>
      <td>{user.birthDate}</td>
      <td>
        <div>
          <img src={user.image} alt="user" height={50} width={50}></img>
        </div>
      </td>
      <td>{user.height}</td>
      <td>{user.weight}</td>
      <td>{user.address.city}</td>
      <td>{user.address.coordinates.lat}, {user.address.coordinates.lng}</td>
      <td>{user.bank.cardExpire}</td>
      <td>{user.company.name}</td>
    </tr>
  ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Username</th>
            <th>D.O.B</th>
            <th>Image</th>
            <th>Height (in cm)</th>
            <th>Weight (in Kg)</th>
            <th>City</th>
            <th>Latitude, Longitude</th>
            <th>Card Expire</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Table;