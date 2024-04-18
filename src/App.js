import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {

  const url = "https://randomuser.me/api"
  const [users, setUsers] = useState([])

  useEffect(() => {
    tambahData()
  }, [])

  const tambahData = () => {
    axios.get(url).then(function (response) {
      console.log(response.data.results)
      setUsers(users.concat(response.data.results))
    })
  }

  const tampilkan = (
    <>
    <button onClick={tambahData}>Tambah data</button>
    <br/>
    <br/>
    {
      users.map(function(u) {
        return (
          <>
          <img src={u.picture.medium} alt={u.name.first} />
          <h1>{u.name.first} {u.name.last}</h1>
          <h1>{u.email}</h1>
          <hr />
          <br/>
          </>
        )
      })
    }
    </>
  )
  return tampilkan
}

export default App