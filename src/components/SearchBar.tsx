import React, { ChangeEvent } from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleReset = () => {
    onChange('')
  }

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        placeholder="Search by any field..."
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring"
      />
      {value && (
        <button
          onClick={handleReset}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          X
        </button>
      )}
    </div>
  )
}

export default SearchBar
