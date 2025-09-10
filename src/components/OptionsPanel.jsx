import React from 'react'

const OptionsPanel = () => {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex flex-col">
                <label htmlFor="length" className="mb-2 text-color-primary font-semibold">
                    Password Length
                </label>
                <select
                    name="length"
                    id="length"
                    className="px-4 py-2 rounded-md bg-white text-color-primary border border-color-primary focus:outline-none focus:ring-2 focus:ring-color-primary"
                >
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div>
                <h1 className="text-lg font-bold text-color-primary">
                    Strength : <span className="font-semibold text-color-secondary">Medium</span>
                </h1>
            </div>
            <div>
                <button onClick={handleGenerate}>Generate Password</button>
            </div>
        </div>
    )
}

export default OptionsPanel
