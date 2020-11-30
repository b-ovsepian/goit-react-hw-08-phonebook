import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActios from "../../redux/actions/contactsAction";
import ContactItem from "../ContactItem/ContactItem";
import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";
import transition from "styled-transition-group";
import {
  getVisibleContacts,
  filterSelector,
} from "../../redux/selectors/contacts-selectors";

const ContactsDiv = styled.div`
  margin-top: 0;
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
const Ul = styled.ul`
  padding: 0;
  list-style: none;
`;
const Li = transition.li.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 250,
})`
  display: flex;
  padding: 5px 10px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;

  border: 1px solid #b3b3b3;
  border-radius: 10px;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => getVisibleContacts(state));
  const filter = useSelector((state) => filterSelector(state));

  return (
    <ContactsDiv>
      <Label>
        <LabelSpan>Find contacts by name</LabelSpan>
        <Input
          type="text"
          name="search"
          value={filter}
          onChange={(e) =>
            dispatch(contactsActios.changeFilter(e.target.value))
          }
        />
      </Label>
      <TransitionGroup component={Ul}>
        {contacts.map((contact) => (
          <Li key={contact.id}>
            <ContactItem id={contact.id} />
          </Li>
        ))}
      </TransitionGroup>
    </ContactsDiv>
  );
};

export default Contacts;
