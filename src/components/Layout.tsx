import { FC } from 'react'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className={`flex flex-col min-h-screen px-64 font-sans justify-center-center bg-dark`}
    >
      {children}
    </main>
  );
};

export default Layout