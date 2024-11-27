import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts ?? initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const handleContactDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleContactCreate = (contact) => {
    setContacts([...contacts, { ...contact, id: nanoid() }]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleContactCreate} />
      <SearchBox
        query={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ContactList contacts={filteredContacts} onDelete={handleContactDelete} />
    </div>
  );
}

export default App;
