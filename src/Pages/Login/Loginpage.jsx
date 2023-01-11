import React from 'react'
import { useState } from 'react';
import { useLoginStore } from './useLoginStore';
import AppService from '../../Components/Appservices/Appservice';

const Loginpage = () => {
    const { loggedIn, userInfo } = useLoginStore();
    const [deleted, setDeleted] = useState(false)

    console.log(userInfo)
  return (
    <div>


 <button value={userInfo.id} onClick={() => {
                    AppService.Delete(userInfo.id)
                    setDeleted(() => !deleted)
}}>Slet</button>




    </div>
  )
}

export default Loginpage