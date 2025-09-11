import React from 'react'

const PasswordDisplay = ({ password }) => {
    
  return (
    <div>
      <div className='mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50 min-w-[300px] text-center'>
        {password ? (<span>{password}</span>):<span>No password generated</span>}
      </div>
    </div>
  )
}

export default PasswordDisplay
