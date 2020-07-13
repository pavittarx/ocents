import { useState } from "react";
import { useQuery } from 'urql';


import { motion } from "framer-motion";
import styled from "styled-components";

import TopBar from "@/components/topbar";
import SideBar from "@/components/sidebar";
import Grid from "@/containers/grid";
import ALL_EVENT from "@/gql/queries";




const Main = styled(motion.div)`
  grid-column: 2/6;
  grid-row: 2/3;
  padding: 13px 15px;

  .event-container {
    padding: 20px;
    margin: 5px;
    /* border-radius: 10px;
    line-height: 1.1;
    box-shadow: inset 0 0 2px 1px rgb(218, 214, 214);
    opacity: 0.75; */

    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    background: #fff;
    border-radius: 16px;


    header {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    main {
      min-height: 100px;
    }
  }
`;

const EventButton = styled(motion.div)`
`;

export default () => {
  const [toggle, setToggle] = useState(false);
  const [result, reexecuteQuery] = useQuery({
    query: ALL_EVENT,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Grid>
      <TopBar />
      <SideBar />
      <Main>
      {data.events.map(event => (
        
        <section className="event-container">
          <header>{event.title}</header>
          <main>{event.content}</main>
          
        </section>
      ))}
        
        <motion.div> 
          <EventButton>

          </EventButton>
          <EventButton>

          </EventButton>
          <EventButton>

          </EventButton>
        </motion.div>
      </Main>
    </Grid>
  );
};
