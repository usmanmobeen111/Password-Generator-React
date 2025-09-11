import React, { useState } from 'react'
import StrengthMeter from './StrengthMeter'

const OptionsPanel = ({ onGenerate, password }) => {
    const [length, setLength] = useState(8)

    const handleLengthChange = (e) => {
        setLength(parseInt(e.target.value))
    }

    const handleGenerate = () => {
        onGenerate(length)
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex flex-col">
                <label htmlFor="length" className="mb-2 text-color-primary font-semibold">
                    Password Length
                </label>
                <select
                    name="length"
                    id="length"
                    value={length}
                    onChange={handleLengthChange}
                    className="px-4 py-2 rounded-md bg-white text-color-primary border border-color-primary focus:outline-none focus:ring-2 focus:ring-color-primary"
                >
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                </select>
            </div>

            <StrengthMeter password={password} />

            <div>
                <button className='bg-gradient-to-r from-primary to-secondary px-3 py-2 text-white rounded-lg hover:bg-gradient-to-r hover:from-primary/85 hover:to-secondary/85 cursor-pointer transition duration-300' onClick={handleGenerate}>Generate Password</button>
            </div>
        </div>
    )
}

export default OptionsPanel
