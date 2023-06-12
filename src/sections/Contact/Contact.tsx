import Divider from "../../components/Divider/Divider";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.header}>Reach Me</h2>
      <div>
        <form
          action="mailto:patrykbusko[work]@gmail.com"
          method="post"
          autoComplete="on"
          className={styles.emailForm}
        >
          <h3 className={styles.subHeader}>Email</h3>

          <label htmlFor="name">your name</label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={32}
            placeholder="Your name"
          />

          <label htmlFor="email">your name</label>
          <input
            type="email"
            name="email"
            id="email"
            maxLength={40}
            placeholder="Your email"
          />

          <label htmlFor="message">your name</label>
          <textarea
            name="message"
            id="message"
            placeholder="your message"
            rows={4}
          />

          <button type="submit">Send email</button>
        </form>
      </div>

      <Divider>OR</Divider>

      <div>
        <h3 className={styles.subHeader}>Socials</h3>
        <ul>
          <li>linkedIN</li>
          <li>Github</li>
          <li>Discord</li>
          <li>Email</li>
          <button type="button">Get resume</button>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
