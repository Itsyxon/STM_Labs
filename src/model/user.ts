interface IUser {
  id: number
  name: {
    first: string
    last: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  location: {
    state: string
    city: string
  }
  email: string
  phone: string
  registered: {
    date: Date
  }
}

export default IUser
