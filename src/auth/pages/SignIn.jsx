import { Link } from "react-router-dom"

export const SignIn = () => {
  return (
    <>
      <div>
        <h1>Welcome Back!</h1>
        <Link to="/auth/signup" >
          {"Don't have an account? Sign Up"}
        </Link>
      </div>
    </>
  )
}

