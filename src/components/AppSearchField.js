/** @format */

import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const AppSearchField = ({
  placeholder,
  onClick,
  setValue,
  value,
  rounded = true,
  Error = false,
  ErrorMessage = '',
}) => {
  return (
    <div className='flex  justify-center flex-col w-1/3 min-w-fit h-auto'>
      <div
        className={` w-full flex  overflow-hidden  ${
          rounded && 'rounded-full'
        } `}
      >
        <input
          placeholder={placeholder}
          className='h-full w-2/3 p-4 focus:outline-none '
          type='search'
          autoFocus
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <div
          onClick={onClick}
          className='bg-green-400 flex flex-1 hover:text-white w-1/3 items-center justify-center  cursor-pointer'
        >
          <SearchIcon />
        </div>
      </div>
      {Error && (
        <span className=' text-red-500 px-4 font-medium'>{ErrorMessage}</span>
      )}
    </div>
  )
}

export default AppSearchField
