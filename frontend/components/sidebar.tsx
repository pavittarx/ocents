import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  UpdateIcon,
  DiscussionIcon,
  SubscribeIcon,
  ChevronLeft,
  ChevronRight,
} from "@/components/icons";

const Sidebar = styled(motion.div)`
  grid-row: 1/3;
  grid-column: 1;
  z-index: 10;
  background: white;
`;

const Button = styled(motion.div)`
  display: flex;
  align-items: center;
  place-items: center;

  padding: 10px 20px;
  border-radius: 20px;
  width: 150px;

  &:hover {
    background: rgba(2, 2, 2, 0.8);
    color: #fff;
  }

  span {
    margin-left: 15px;
  }
`;

export default () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Sidebar
      toggle={toggle}
      initial={{
        width: 50,
        overflowX: "hidden",
      }}
      animate={{
        width: toggle ? 400 : 50,
      }}
    >
      <motion.div
        style={{
          minHeight: 50,
          display: "flex",
          padding: "0px 10px",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: !toggle? "center" : "flex-end"
        }}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {!toggle ? <ChevronRight /> : <ChevronLeft />}
      </motion.div>
      <Button>
        <UpdateIcon /> <span> Updates </span>
      </Button>
      <Button>
        <DiscussionIcon /> <span> Discussions </span>
      </Button>
      <Button>
        <SubscribeIcon /> <span> Subscribe </span>
      </Button>
    </Sidebar>
  );
};
