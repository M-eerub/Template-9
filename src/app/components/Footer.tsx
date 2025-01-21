import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <!-- Responsive Footer --> */}

<footer className="bg-black text-gray-300 sm:text-center sm:items-center sm:flex py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      {/* <!-- About Section --> */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
        <p className="text-sm">
          Prepare clients and deliver flawless business insights on ground-breaking methods and
          professional streamlined commerce in major circles around the world.
        </p>
        <div className="mt-4">
          <p className="font-semibold">Opening Hours:</p>
          <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      {/* <!-- Useful Links --> */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
        <ul>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">News</a></li>
          <li><a href="cheif" className="hover:underline">Partners</a></li>
          <li><a href="cheif" className="hover:underline">Team</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* <!-- Help Section --> */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold text-white mb-4">Help?</h4>
        <ul>
          <li><a href="faq" className="hover:underline">FAQ</a></li>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Support</a></li>
          <li><a href="#" className="hover:underline">Privacy</a></li>
        </ul>
      </div>

      {/* <!-- Recent Posts --> */}
      <div className="w-full md:w-1/4">
        <h4 className="text-lg font-semibold text-white mb-4">Recent Post</h4>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline text-sm">Is seafood good for your health?</a>
            <p className="text-xs text-gray-400">May 25, 2023</p>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline text-sm">Can you trust fast food chains?</a>
            <p className="text-xs text-gray-400">May 24, 2023</p>
          </li>
          <li>
            <a href="#" className="hover:underline text-sm">Do you like seafood for breakfast?</a>
            <p className="text-xs text-gray-400">May 23, 2023</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-4 flex flex-wrap items-center justify-between bg-gray-400">
    <p className="text-center py-4 text-white">
          © 2024 FoodTuck. All Rights Reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-100">Facebook</a>
        <a href="#" className="text-white hover:text-gray-100">Twitter</a>
        <a href="#" className="text-white hover:text-gray-100">LinkedIn</a>
        <a href="#" className="text-white hover:text-gray-100">Instagram</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer;
