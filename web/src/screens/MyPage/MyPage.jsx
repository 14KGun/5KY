import React from "react";
import useSWR from "swr";
import Container from "@mui/material/Container";

const MyPage = () => {
  //useSWR config mutate?
  const { data } = useSWR("/user/byMe");

  return (
    <Container maxWidth="">
      <h1>MyPage</h1>
    </Container>
  );
};

export default MyPage;
