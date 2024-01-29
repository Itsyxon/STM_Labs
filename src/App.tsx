import React, { useEffect, useState } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import IUser from './model/user';
import UserList from './components/UserList';
import Loader from './components/Loader';


function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    setIsLoading(true)
    const apiURL = 'https://randomuser.me/api/?results=15'
    fetch(apiURL)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setUsers(arr.results)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="app">
      <h1>User Base</h1>
      {isLoading ? <Loader /> :
        <>
          <MainForm users={users} />
          {/* <UserList users={users} /> */}

        </>}
    </div>
  );
}

export default App;
