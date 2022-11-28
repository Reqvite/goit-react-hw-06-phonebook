import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';

import { Container } from "./Container/Container";
import { MainTitle } from './Titles/MainTitle/MainTitle'
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export const App = () => {
 
  return (
         <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm />
        <SecondaryTitle title='Contacts' />
        <Filter title='Find contacts by name'  />
        <ContactList  />
      </Container>
      </ThemeProvider>
  )  
}

