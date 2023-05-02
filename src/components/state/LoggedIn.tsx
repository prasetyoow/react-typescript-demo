import { useState } from "react"

export const LoggedIn = () => {
  // when using useState hook we dont need to declare the data type, because TS do it for us
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged In" : "Logged out"}</div>
    </div>
  )
}