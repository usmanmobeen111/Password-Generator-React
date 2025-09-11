import React from 'react'
import { calculatePasswordStrength } from '../utils/passwordUtils'

const StrengthMeter = ({ password }) => {
  const strength = calculatePasswordStrength(password)
  const percentage = (strength / 4) * 100

  let color = 'bg-red-500'
  if (strength === 2) color = 'bg-yellow-500'
  else if (strength >= 3) color = 'bg-green-500'

  return (
    <div className="flex items-center gap-4">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full ${color} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-semibold">{Math.round(percentage)}%</span>
    </div>
  )
}

export default StrengthMeter
