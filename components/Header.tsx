import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full">
      <div className="container mx-auto">
        <Navbar containerStyles="bg-red-300 py-12 flex gap-4" />
      </div>
    </header>
  );
};

export default Header;
