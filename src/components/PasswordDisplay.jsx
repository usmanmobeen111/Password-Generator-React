import React from 'react'

const PasswordDisplay = ({ password }) => {
    const handleGenerate = (length) => {
        // This function should be passed the selected length.
        // For demonstration, let's assume length is 8.


        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        // You would typically set this password to state or pass it up via a callback
        console.log(generatedPassword);
    }
  return (
    <div>
      <div className='mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50 min-w-[300px] text-center'>
        {password ? (<span>{password}</span>):<span>No password generated</span>}
      </div>
    </div>
  )
}

export default PasswordDisplay
