import React from "react";
import { client } from "../lib/client";

function Home({ wohnbauData, mehrfamilienData }) {
  return (
    <>
      <div>Home</div>
      {console.log(wohnbauData, mehrfamilienData)}
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "wohnbau"]';
  const wohnbauData = await client.fetch(query);

  const mehrfamilienQuery = '*[_type == "mehrfamilien"]';
  const mehrfamilienData = await client.fetch(mehrfamilienQuery);

  return {
    props: { wohnbauData, mehrfamilienData },
  };
};

export default Home;
