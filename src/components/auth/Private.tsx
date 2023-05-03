import { Login } from "./Login"
import { ProfileProp } from "./Profile"

type PrivateProps = {
  isLoggedIn: Boolean
  component: React.ComponentType<ProfileProp>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Pras"/>
  } else {
    return <Login />
  }
}