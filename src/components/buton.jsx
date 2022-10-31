import React from 'react'

const Buton = ({getUser, handleClick}) => {

    handleClick = () => {
        getUser()
    }

  return (
    <div>
        <button className='btn' onClick={handleClick}>Random User
        </button>
    </div>
  )
}

export default Buton