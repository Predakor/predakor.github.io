import styles from "./Email.module.scss";

function Email() {
  return (
    <form
      action="mailto:patrykbusko[work]@gmail.com"
      method="post"
      autoComplete="on"
      className={styles.form}
    >
      <label className="sr-only" htmlFor="name">
        your name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        maxLength={32}
        placeholder="Your name"
      />
      <label className="sr-only" htmlFor="email">
        your name
      </label>
      <input
        type="email"
        name="email"
        id="email"
        maxLength={40}
        placeholder="Your email"
      />
      <label className="sr-only" htmlFor="message">
        Your name
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="your message"
        rows={4}
        required
      />
      <button type="submit">Send email</button>
    </form>
  );
}

export default Email;
