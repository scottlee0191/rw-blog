import { Link, NavLink, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="h-screen max-w-screen-md mx-auto p-4">
      <nav className="flex justify-between pb-4">
        <h1 className="text-4xl font-bold">
          <Link to={routes.home()}>Blog</Link>
        </h1>
        <ul className="flex font-semibold text-xl">
          <li className="mr-2">
            <NavLink to={routes.home()} activeClassName="text-blue-500">
              Blog
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={routes.about()} activeClassName="text-blue-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.contract()} activeClassName="text-blue-500">
              Contract
            </NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default BlogLayout
