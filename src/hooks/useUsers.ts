import { useState, useEffect } from 'react'
import { fetchUsers } from '../services/userService'
import { User } from '../types/User'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filter, setFilter] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data)
        setFilteredUsers(data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (filter) {
      const lowerCaseFilter = filter.toLowerCase()
      setFilteredUsers(
        users.filter(
          (u) =>
            u.name.toLowerCase().includes(lowerCaseFilter) ||
            u.email.toLowerCase().includes(lowerCaseFilter) ||
            u.phone.toLowerCase().includes(lowerCaseFilter) ||
            u.company.name.toLowerCase().includes(lowerCaseFilter)
        )
      )
    } else {
      setFilteredUsers(users)
    }
  }, [filter, users])

  return { users: filteredUsers, filter, setFilter, loading, error }
}
