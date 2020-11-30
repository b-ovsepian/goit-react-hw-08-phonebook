import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import authOperations from "../../redux/operations/authOperations";
import styled from "styled-components";

const Form = styled.form`
  display: block;
  margin-top: 0;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;

  width: 342px;
  background: #fff;
  border: 2px solid #212121;
  border-radius: 10px;
`;
const Label = styled.label`
  display: block;
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;
const LabelSpan = styled.span`
  display: block;
  margin-left: 15px;
`;
const Input = styled.input`
  display: block;
  margin: 0 auto;
  padding-left: 10px;
  width: 280px;
  height: 40px;
  background: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;
const Button = styled.button`
  display: block;
  margin: 0 auto;

  padding: 11px 78px;

  min-width: 240px;
  min-height: 44px;

  border-radius: 10px;
  border: 2px solid transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.22;

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-image 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-image: linear-gradient(47.73deg, #6368e5 15.48%, #b884f3 81.25%);
  background-position: center;
  background-size: calc(100% + 4px);

  color: #ffffff;

  &:hover,
  &:focus {
    border: 2px solid #6368e5;
    color: #6368e5;
    background-image: none;
    background-color: #ffffff;
  }
`;
const Advice = styled.p`
  text-align: center;
`;
const Div = styled.div`
  padding: 20px;
`;
const formInitialState = {
  name: "",
  email: "",
  password: "",
};

function Registration() {
  const dispatch = useDispatch();
  const [{ name, email, password }, setForm] = useState({
    ...formInitialState,
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setForm({ ...formInitialState });
  };

  return (
    <Div>
      <Form autoComplete="on" onSubmit={handlerSubmit}>
        <Label>
          <LabelSpan>Name</LabelSpan>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={handlerInputChange}
          />
        </Label>
        <Label>
          <LabelSpan>Email</LabelSpan>
          <Input
            suggested="email"
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handlerInputChange}
          />
        </Label>
        <Label>
          <LabelSpan>Password</LabelSpan>
          <Input
            suggested="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlerInputChange}
          />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
      <Advice>
        If you have got an account, please <NavLink to="/login">log in</NavLink>
      </Advice>
    </Div>
  );
}

export default Registration;
