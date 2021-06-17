import React, { useEffect } from 'react';
import Form from '../../components/Form/Form.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { loadingContacts } from '../../redux/contacts/contacts-selectors';
import style from '../../components/Style.module.css';
import { useDispatch, useSelector } from 'react-redux';

function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(loadingContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <Form />
      <Filter />
      <ContactList />
      {isLoadingContacts && <h1>Loading...</h1>}
    </div>
  );
}
export default ContactsView;
