import { useState } from 'react';
import { data } from './data';
import './App.css';
import back from './back.png';
import next from './next.png';


function App() {
  const [user, setUser] = useState(0);
  const {userName, aboutUser, userAge, userImg} = data[user];
  const previousUser = () => {
    setUser((user => {
      user --;
      if (user < 0) {
        return data.length - 1
      }
      return user
    }))
  }
  const nextUser = () => {
    setUser((user => {
      user ++;
      if (user > data.length - 1) {
        user = 0;
      }
      return user
    }))
  }
  return (
    <div className='main'>
      <div className='container'>
        <div>
          <h1>{userName}</h1>
        </div>
        <div>
          <img src = {userImg} width='250px' alt = 'User'/>
        </div>
        <div>
          <h3>{aboutUser}</h3>
        </div>
        <div>
          <h3>{userAge}</h3>
        </div>

      </div>
      <div className='buttons'>
        <div className='back-container'>
          <button onClick={previousUser} className='back-btn'><img src = {back} width = '50px' alt = 'Previous'/></button>
        </div>
        <div className='next-container'>
          <button onClick={nextUser} className='next-btn'><img src = {next} width = '50px' alt = 'Next'/></button>
        </div>
      </div>
    </div>
  )
}

export default App;
