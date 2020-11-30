import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../redux/selectors/authSelectors";
import authOperations from "../../redux/operations/authOperations";
import styled from "styled-components";

const Email = styled.span`
  color: white;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 700;
`;
const Button = styled.button`
  display: block;

  /* padding: 11px 78px; */

  min-width: 100px;
  /* min-height: 44px; */

  border-radius: 4px;
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

  background-position: center;
  background-size: calc(100% + 4px);

  color: #6368e5;
  background-image: none;
  background-color: #ffffff;

  &:hover,
  &:focus {
    color: #ffffff;
    background-image: linear-gradient(47.73deg, #6368e5 15.48%, #b884f3 81.25%);
    border: 2px solid #ffffff;
  }
`;

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => getUserEmail(state));

  return (
    <>
      <Email>{email}</Email>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
