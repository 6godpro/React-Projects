import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

interface Props {
  to: string;
  weight?: number;
  duration?: number;
}

const NavButton = ({ to, weight = 0, duration = 500 }: Props) => {
  return (
    <Link to={to} smooth={true} duration={duration}>
      <Button bg="none" _hover={{ bg: "none" }} fontWeight={weight} size="xs">
        {to.charAt(0).toUpperCase() + to.slice(1)}
      </Button>
    </Link>
  );
};

export default NavButton;
