import React from 'react'
import { User } from '../types/User'

interface UserDetailsProps {
  selectedUser: User
  setSelectedUser: (user: null) => void
}

const UserDetails: React.FC<UserDetailsProps> = ({
  selectedUser,
  setSelectedUser,
}) => {
  if (!selectedUser) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md w-full max-w-md mx-4">
        <button
          onClick={() => setSelectedUser(null)}
          className="absolute rounded top-3 right-3 px-3 py-2 text-base font-medium bg-gray-900 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors border-transparent border hover:border-gray-500"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
          {selectedUser.name}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          <strong>Email:</strong> {selectedUser.email}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          <strong>Phone:</strong> {selectedUser.phone}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          <strong>Company:</strong> {selectedUser.company.name}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          <strong>Website:</strong> {selectedUser.website}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          <strong>Address:</strong> {selectedUser.address.street},{' '}
          {selectedUser.address.suite}, {selectedUser.address.city},{' '}
          {selectedUser.address.zipcode}
        </p>
      </div>
    </div>
  )
}

export default UserDetails
