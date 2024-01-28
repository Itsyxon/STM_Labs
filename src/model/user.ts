interface IUser {
  id: number
  name: {
    first: string
    last: string
  }
  picture: string
  location: {
    state: string
    city: string
  }
  email: string
  phone: string
}

export default IUser
