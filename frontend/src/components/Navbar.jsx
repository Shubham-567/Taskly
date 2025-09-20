import { Box, LogOut, Mail, Moon, Sun, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { logout, user } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className='fixed top-0 left-0 w-full px-6 sm:px-8 py-3 bg-card-bg border-b border-border'>
      <nav className='flex items-center justify-between gap-4 text-2xl font-semibold'>
        <Link href='/' className='logo flex items-center gap-2'>
          <Box className='size-8 text-primary' />
          <span>TaskFlow</span>
        </Link>

        <div className='flex items-center gap-4 md:gap-6'>
          {/* Dark Mode Toggle button */}
          <button onClick={handleDarkModeToggle}>
            {darkMode ? (
              <Sun className='size-5 text-txt-muted hover:text-primary cursor-pointer' />
            ) : (
              <Moon className='size-5 text-txt-muted hover:text-primary cursor-pointer' />
            )}
          </button>

          {/* Logout button  */}
          <button onClick={() => logout()}>
            <LogOut className='size-5 text-txt-muted hover:text-danger cursor-pointer' />
          </button>

          {/* User Profile */}
          <div className='relative'>
            <button
              className='bg-primary hover:bg-primary/90 rounded-full size-8 text-xl text-primary-foreground flex justify-center items-center font-bold cursor-pointer'
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {user?.name.charAt(0) || "U"}
            </button>

            {/* user profile menu */}
            {isMenuOpen && (
              <div className='absolute top-12 right-0 bg-card-bg ring ring-border rounded-lg shadow-lg py-2 px-4  z-10 cursor-default'>
                <div className='flex justify-center flex-col gap-2'>
                  <p className='text-base text-center text-txt flex items-center gap-2'>
                    <User className='size-5 text-primary' />
                    <span>{user?.name}</span>
                  </p>
                  <hr className='border border-border' />
                  <p className='text-base text-center text-txt flex items-center gap-2'>
                    <Mail className='size-5 text-primary' />
                    <span>{user?.email}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
