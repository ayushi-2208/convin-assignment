import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import './component/User';
import User from './component/User';
import Pagination from './component/Pagination';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [userSize, setUserSize] = useState(5);
  const [currentUser, setCurrentUser] = useState(-1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users?page=2');
      setUsers(res.data.data);
      setLoading(false);
    }
    fetchUsers();

  }, []);


  const fetchUser = (number) => {

    console.log("num is " + number);
      const getUserData = async () => {
        setLoading(true);
        const res = await axios.get('https://reqres.in/api/users/' + number);
        setUser(res.data.data);
        setLoading(false);
      }

      getUserData();
  }
  
  return (
    <div className="App">
      <User user={user} loading={loading} />
      <Pagination totalUsers={users.length} onClickAction={fetchUser} />
    </div>

  );
}

export default App;
