import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import {
  ContactItem,
  BtnDelete,
  TextWrap,
  ContactText,
  ContactMarker,
} from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <TextWrap>
        <ContactMarker></ContactMarker>
        <ContactText>
          <p>{name}:</p> <p>{number}</p>
        </ContactText>
      </TextWrap>
      <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnDelete>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
