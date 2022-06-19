import { Link, NavLink, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, logOut } = useAuth()
  return (
    <div className="h-screen max-w-screen-md mx-auto p-4">
      <nav className="flex justify-between pb-4">
        <h1 className="text-4xl font-bold">
          <Link to={routes.home()}>Blog</Link>
        </h1>
        <ul className="flex font-semibold text-xl">
          <li className="mr-2">
            <NavLink to={routes.about()} activeClassName="text-blue-500">
              About
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={routes.contract()} activeClassName="text-blue-500">
              Contract
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to={routes.login()}>Login</Link>
            </li>
          )}
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default BlogLayout
