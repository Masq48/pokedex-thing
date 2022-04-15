import Navbar from "./Navbar"

const Layout = ({ children }) => {
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
