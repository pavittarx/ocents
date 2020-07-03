import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { MenuIcon, CloseIcon } from "@/components/icons";

import SideBar from "@/components/sidebar";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 50px 100fr;
  max-width: 500px;
`;

const Topbar = styled(motion.div)`
  background: tomato;
  color: white;
  grid-row: 1/2;
  grid-column: 2 /-1;
  padding: 10px;
  text-align: center;

  svg,
  span {
    vertical-align: middle;
  }
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
      <SideBar />
      <Main>Main Component</Main>
    </Grid>
  );
};
