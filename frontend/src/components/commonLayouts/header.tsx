import Link from 'react-router-dom';
function Header() {
  return(
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-green-300">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">ポートフォリオ</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5 hover:text-gray-500">Home</a>
        <a href="/About" className="mr-5 hover:text-gray-500">About</a>
        <a href="/Works" className="mr-5 hover:text-gray-500">Works</a>
      </nav>
    </div>
  );
}

export default Header;