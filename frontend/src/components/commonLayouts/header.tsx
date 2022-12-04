import {motion} from 'framer-motion';

function Header() {
  return(
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-green-300">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">ポートフォリオ</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-indigo-500	flex flex-wrap items-center text-base justify-center">
        <motion.a href="/react_express_portfolio/" className="mr-5 hover:text-gray-500" whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }}>About</motion.a>
        <motion.a href="/react_express_portfolio/works" className="mr-5 hover:text-gray-500" whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }}>Works</motion.a>
      </nav>
    </div>
  );
}

export default Header;