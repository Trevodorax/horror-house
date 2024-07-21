export interface AuthSlice {
  token: string | null
}

export interface GlobalStore extends
  AuthSlice
{}
