import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import { useUsers } from './hooks/useUsers'
import { useState, useCallback } from 'react'
import UserCardList from './components/UserCardList'

function App() {
  const { users, filter, setFilter, loading, error } = useUsers()
  const [isCardView, setIsCardView] = useState(false)

  const toggleView = useCallback((view: boolean) => setIsCardView(view), [])

  return (
    <div className="container mx-auto p-4 display flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Admin Panel</h1>
      <SearchBar value={filter} onChange={setFilter} />
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => toggleView(false)}
          className={`px-4 py-2 rounded border transition ${
            !isCardView
              ? ' text-white hover:border-white-600'
              : ' text-gray-500 border-white-600 hover:border-gray-400'
          }`}
        >
          Table View
        </button>
        <button
          onClick={() => toggleView(true)}
          className={`px-4 py-2 rounded border transition ${
            isCardView
              ? ' text-white hover:border-white-600'
              : ' text-gray-500 border-white-600 hover:border-gray-400'
          }`}
        >
          Card View
        </button>
      </div>
      {isCardView ? (
        <UserCardList users={users} loading={loading} error={error} />
      ) : (
        <UserList users={users} loading={loading} error={error} />
      )}
    </div>
  )
}

export default App
