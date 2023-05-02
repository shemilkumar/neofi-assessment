import { FC } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return <main className='flex flex-col justify-center-center px-64 bg-dark min-h-screen font-sans'>
    {children}
  </main>
}

export default Layout