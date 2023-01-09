import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }
);
