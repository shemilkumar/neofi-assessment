import { FC } from 'react'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className={`flex flex-col min-h-screen px-64 xl:px-32 lg:px-24 md:px-16 sm:px-10 xs:px-4 font-sans justify-center-center bg-dark`}
    >
      {children}
    </main>
  );
};

export default Layout