import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
<header className='fixed top-0 left-0 w-full bg-[#800000] bg-opacity-95 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-[#a83232]'>
  <div className='container mx-auto px-4 py-3'>
    <div className='flex flex-wrap justify-between items-center'>
      <Link to='/' className='flex items-center space-x-2 text-2xl font-bold text-[#ffb3b3] hover:text-white transition-colors duration-200'>
        <span className='text-3xl'>🍳</span>
        <span className='tracking-wide'>MorningFuel</span>
      </Link>

      <nav className='flex flex-wrap items-center gap-4'>
        <Link
          to={"/"}
          className='text-gray-200 hover:text-[#ffb3b3] transition duration-300 ease-in-out'
        >
          Home
        </Link>
        {user && (
          <Link
            to={"/cart"}
            className='relative group text-gray-200 hover:text-[#ffb3b3] transition duration-300 ease-in-out'
          >
            <ShoppingCart className='inline-block mr-1 group-hover:text-[#ffb3b3]' size={20} />
            <span className='hidden sm:inline'>Cart</span>
            {cart.length > 0 && (
              <span
                className='absolute -top-2 -left-2 bg-[#a83232] text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-[#ffb3b3] transition duration-300 ease-in-out'
              >
                {cart.length}
              </span>
            )}
          </Link>
        )}
        {isAdmin && (
          <Link
            className='bg-[#a83232] hover:bg-[#800000] text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
            to={"/secret-dashboard"}
          >
            <Lock className='inline-block mr-1' size={18} />
            <span className='hidden sm:inline'>Dashboard</span>
          </Link>
        )}

        {user ? (
          <button
            className='bg-gray-800 hover:bg-[#a83232] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
            onClick={logout}
          >
            <LogOut size={18} />
            <span className='hidden sm:inline ml-2'>Log Out</span>
          </button>
        ) : (
          <>
            <Link
              to={"/signup"}
              className='bg-[#a83232] hover:bg-[#800000] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
            >
              <UserPlus className='mr-2' size={18} />
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className='bg-gray-800 hover:bg-[#a83232] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
            >
              <LogIn className='mr-2' size={18} />
              Login
            </Link>
          </>
        )}
      </nav>
    </div>
  </div>
</header>
	);
};
export default Navbar;
