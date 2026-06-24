type StoredUser = {
  name: string
  email: string
  password: string
}

const STORAGE_KEY = 'campusgo-users'

function getUsers(): StoredUser[] {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return []

  try {
    return JSON.parse(raw) as StoredUser[]
  } catch {
    return []
  }
}

function saveUsers(users: StoredUser[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

export function registerUser(user: StoredUser) {
  const users = getUsers()
  const exists = users.some((existing) => existing.email === user.email)

  if (exists) {
    throw new Error('An account with that email already exists.')
  }

  users.push(user)
  saveUsers(users)
}

export function authenticateUser(email: string, password: string) {
  const users = getUsers()
  return users.some((user) => user.email === email && user.password === password)
}
