import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import TopBar from "@/components/topbar";
import SideBar from "@/components/sidebar";
import Grid from "@/containers/grid";

const Main = styled(motion.div)`
  grid-column: 2/6;
  grid-row: 2/3;
`;

export default () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Grid>
      <TopBar />
      <SideBar />
      <Main>Main Component</Main>
    </Grid>
  );
};
