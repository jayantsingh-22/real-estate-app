import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  ButtonGroup,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NavMobile from "./NavMobile";

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <chakra.header id="header" borderBottom="1px solid rgb(0,0,0,0.3)">
      <Flex w="100%" py="5" align="center" justify="space-between">
        <Link to="/">
          <Heading fontSize="3xl" color="purple.700">
            Estatery.
          </Heading>
        </Link>
        {isDesktop ? (
          <>
            <ButtonGroup as="nav" variant="ghost" spacing="5" size="sm">
              {["Rent", "Buy", "Sell", "Manage Property", "Resources"].map(
                (item) => (
                  <Button
                    fontSize="16px"
                    fontWeight={1000}
                    key={item}
                    _hover={{ bg: "purple.200", color: "black" }}
                    rightIcon={
                      item === "Manage Property" || item === "Resources" ? (
                        <ChevronDownIcon /> // Render dropdown indicator for 'Manage Property' and 'Resources'
                      ) : undefined
                    }
                  >
                    {item}
                  </Button>
                )
              )}
            </ButtonGroup>

            <HStack>
              <Button size="sm" variant="solid">
                Log In
              </Button>
              <Button size="sm" variant="outline">
                Sign up
              </Button>
            </HStack>
          </>
        ) : (
          <NavMobile />
        )}
      </Flex>
      {/* <Divider color='purple.800' w='20px' />  */}
    </chakra.header>
  );
};

export default Header;
