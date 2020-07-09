import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { MenuIcon, CloseIcon, NotificationIcon } from "@/components/icons";

const Topbar = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1 /-1;
  background: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -3px 0px 1px 1px rgba(0, 0, 0, 0.15);
  z-index: 12;

  div {
    display: inline-block;
  }

  .menu{
    padding: 0 10px;
  }

  .notification{
    padding: 0 10px;
  }

  .ocents{
    color: #b91717;
    font-size: 20px;
  }
`;

export default () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Topbar>
      <motion.div className="menu"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <AnimatePresence>
          {!toggle ? <MenuIcon /> : <CloseIcon />}
        </AnimatePresence>
      </motion.div>
      <motion.div className="ocents"> Ocents </motion.div>
      <motion.div className="notifications">
        <NotificationIcon />
      </motion.div>
    </Topbar>
  );
};
