import React, { useState, useEffect } from 'react';

import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>

      <Section title="Contacts">
        <Filter />

        <ContactsList />
      </Section>
    </>
  );
};

export default App;
