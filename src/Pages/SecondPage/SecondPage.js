/** @format */
import React, { useState } from 'react'
import UserCard from '../../components/UserCard'
import useApi from '../../hooks/useApi'
import getData from '../../api/getData'
import AppSearchField from '../../components/AppSearchField'
import AppLoading from '../../components/AppLoading'
import { Link } from 'react-router-dom'

const SecondPage = () => {
  const [User, setUser] = useState('')
  const { Loading, data = null, Error, request } = useApi(getData)
  const onClick = async () => await request(User).catch((e) => console.log(e))
  return (
    <div
      className='w-full h-screen -z-50 flex flex-col items-center p-20 '
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {Loading && <AppLoading />}
      <AppSearchField
        placeholder={'Username'}
        setValue={setUser}
        value={User}
        onClick={onClick}
        Error={Error !== null}
        ErrorMessage="The UserName doesn't exist."
      />
      {data && <UserCard {...data} />}
      <Link className='cursor-pointer hover:underline text-blue-400' to={'/'}>
        Return Back
      </Link>
    </div>
  )
}

export default SecondPage
