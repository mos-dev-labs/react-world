export type User = {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export type Profile = Omit<User | { following: boolean }, 'email' | 'token'>
