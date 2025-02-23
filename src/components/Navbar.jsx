import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black p-4">  
      <ul className="text-white md:flex hidden list-none flex-row justify-center items-center gap-8">  
        <li><Link to="/" className="px-4 py-2 hover:underline">Home</Link></li>
        <li><Link to="/services" className="px-4 py-2 hover:underline">Schedule a PickUp</Link></li>
        <li><Link to="/ethereum-donation" className="px-4 py-2 hover:underline">Donate</Link></li>  {/* ✅ Fixed Route */}
        <li><Link to="/ngos" className="px-4 py-2 hover:underline">NGOs</Link></li>  
      </ul>
    </nav>
  );
};

export default Navbar;
