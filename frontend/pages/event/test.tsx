import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { MenuIcon, CloseIcon } from "@/components/icons";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 50px 0.5fr 0.5fr;
  grid-template-rows: 50px 1fr;
`;

const Topbar = styled(motion.div)`
  background: tomato;
  color: white;
  align-self: center;
  justify-self: center;
  grid-row: 1/2;
  grid-column: 1/4;
  padding: 10px;

  svg,
  span {
    vertical-align: middle;
  }
`;

const Sidebar = styled(motion.div)`
  background: blue;
  grid-column: ${props => !props.toggle? "1/2" : "1/3"};
  grid-row: 2/3;
  
  z-index: 10;
`;

const Main = styled(motion.div)`
  background: yellow;
  grid-column: 2/6;
  grid-row: 2/3;
`;

export default () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Grid>
      <Topbar
        onClick={() => {
          setToggle(!toggle);
        }}
        toggle={toggle}
      >
        <AnimatePresence>
          {!toggle ? <MenuIcon /> : <CloseIcon />}
        </AnimatePresence>
        <span> Ocents </span>
      </Topbar>
      <Sidebar toggle={toggle} initial={{
        width: 0,
        overflowX: "hidden",
      }}
      animate ={{
        width: toggle? 400 : 50
      }}
      >Sidebar</Sidebar>
      <Main>Main Component</Main>
    </Grid>
  );
};
