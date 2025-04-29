import React from 'react'
import { User } from '../types/User'

interface UserCardProps {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-md transition-colors">
    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
      {user.name}
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      <strong>Email:</strong> {user.email}
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      <strong>Phone:</strong> {user.phone}
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      <strong>Company:</strong> {user.company.name}
    </p>
  </div>
)

export default UserCard
