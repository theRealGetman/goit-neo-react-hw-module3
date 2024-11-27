import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.contactList}>
      {contacts.length === 0
        ? "No contacts"
        : contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={() => onDelete(contact.id)}
            />
          ))}
    </div>
  );
}
