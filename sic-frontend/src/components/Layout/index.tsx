import { ChildrenProps } from '../../models/PropsModels'
import Navbar from '../Navbar'

function Layout({children}: ChildrenProps) {
  return(
    <main className='bg-white dark:bg-gray-800'>
 <nav>
      <Navbar />
    </nav>
    {children}
    </main>
  )
}

export default Layout