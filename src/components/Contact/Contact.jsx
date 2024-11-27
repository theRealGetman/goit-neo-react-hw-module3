import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contact}>
      <ul className={css.info}>
        <li className={css.infoItem}>
          <FaUser />
          <p>{contact.name}</p>
        </li>

        <li className={css.infoItem}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </li>
      </ul>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
