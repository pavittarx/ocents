import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { MenuIcon, CloseIcon } from "@/components/icons";

const Topbar = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2 /-1;
  padding: 10px;
  text-align: center;

  svg,
  span {
    vertical-align: middle;
  }
`;


export default () => {
  const [toggle, setToggle] = useState(false);

  return (
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
  );
};
