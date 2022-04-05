import { NextFunctionComponent } from "next"
import Navbar from "./Navbar"

const Layout: NextFunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>
        <div>
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
