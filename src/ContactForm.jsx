import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit() {
    if (!name || !email || !message) {
      setFeedback('Completeaza toate campurile!');
    } else {
      setFeedback('Multumim, ' + name + '!');
    }
  }

  return (
    <div>
      <h3>Contact</h3>

      <input
        placeholder="Nume"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Mesaj"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>Trimite</button>

      <p>{feedback}</p>
    </div>
  );
}

export default ContactForm;