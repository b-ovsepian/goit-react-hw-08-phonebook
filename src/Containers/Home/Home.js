import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
`;
const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  text-align: center;
`;

function Home() {
  return (
    <div>
      <Title>Hello on your Phonebook</Title>
      <Text>
        Welcome to the application for storing personal contacts. To get
        started, select the registration menu item to add your contacts. If you
        already have an account, go to the login page to get started.
      </Text>
    </div>
  );
}

export default Home;
