import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const menuItems = [
  {
    label: 'Features',
    hasDropdown: true,
    dropdownItems: ['Team spaces', 'Forms', 'Integrations'],
  },
  {
    label: 'Use cases',
    hasDropdown: true,
    dropdownItems: ['Creators', 'Communities', 'Startups'],
  },
  {
    label: 'Learn',
    hasDropdown: true,
    dropdownItems: ['Blog', 'Webinars', 'Tutorials'],
  },
  { label: 'Pricing', hasDropdown: false },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const toggleDesktopDropdown = (label) => {
    setDesktopDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="bg-[#2E2B23] text-white rounded-full mt-2 px-6 py-3 flex items-center justify-between shadow-md container mx-auto relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl">🟡</div>
        <span className="text-yellow-400 font-bold text-xl">NAS</span>
        <span className="text-white font-bold text-xl">.IO</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center font-medium">
        {menuItems.map((item, idx) => (
          <li key={idx} className="relative cursor-pointer">
            <button
              onClick={() => item.hasDropdown && toggleDesktopDropdown(item.label)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    desktopDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {item.hasDropdown && desktopDropdown === item.label && (
              <ul className="absolute top-8 left-0 bg-white text-black rounded-md shadow-lg p-2 space-y-1 z-50 min-w-[150px]">
                {item.dropdownItems.map((subItem, subIdx) => (
                  <li key={subIdx} className="hover:bg-gray-100 px-3 py-1 rounded">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <button className="px-4 py-1 cursor-pointer border border-gray-500 rounded-full hover:bg-gray-700">Log in</button>
        </li>
        <li>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded-full cursor-pointer hover:bg-yellow-500 font-semibold">
            Start for free
          </button>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#2E2B23] text-white rounded-md mx-4 p-4 flex flex-col space-y-3 md:hidden z-40 shadow-lg">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <button
                className="text-left flex justify-between items-center w-full"
                onClick={() => item.hasDropdown && toggleMobileDropdown(item.label)}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      mobileDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {item.hasDropdown && mobileDropdown === item.label && (
                <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-300">
                  {item.dropdownItems.map((subItem, subIdx) => (
                    <li key={subIdx} className="hover:text-white">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button className="border border-gray-500 rounded-full py-2 hover:bg-gray-700">Log in</button>
          <button className="bg-yellow-400 text-black rounded-full py-2 hover:bg-yellow-500 font-semibold">
            Start for free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
