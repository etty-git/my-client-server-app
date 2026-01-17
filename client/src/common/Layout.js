import { Outlet } from 'react-router-dom';
import  Navigate from './Navigate';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-4 sticky top-0 z-50 flex justify-center">
        <Navigate />
      </header>
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600">© 2026 Elite Platform</footer>
    </div>
  );
}
export default Layout