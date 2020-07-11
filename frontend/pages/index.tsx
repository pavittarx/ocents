import Link from "next/link";

import styled from "styled-components";


const Placeholder = styled.div`
  display: block;
  text-align: center;

  h1 {
    font-size: 56px;
    color: #ff4400;
  }

  img {
    margin: 0 auto;
    height: 50vh;
  }

  p {
    font-size: 22px;
  }
`;

function Index() {
  return (
    <Placeholder>
      <h1> Ocents </h1>
      <img src="/illustration.svg" />
      <p> Thank you for stopping by. </p>
      <p> Coming soon... </p>
    </Placeholder>
  );
}

export default Index;
