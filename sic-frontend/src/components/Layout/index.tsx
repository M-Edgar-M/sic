import { ChildrenProps } from '../../models/PropsModels'

function Layout({children}: ChildrenProps) {
  return(
    <main className='bg-white dark:bg-gray-800'>{children}</main>
  )
}

export default Layout