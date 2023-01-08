export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const value = selectFilter(state);

  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
};
