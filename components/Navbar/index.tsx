import Container from "../Container";
import Logo from "../Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] flex justify-center">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
