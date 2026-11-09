// Pure helpers that turn the contact-form fields into WhatsApp / email links.
// Kept separate from the component so they can be unit-tested directly.

export function buildMessage(labels, { name, email, message }) {
  return `${labels.name}: ${name.trim()}\n${labels.email}: ${email.trim()}\n${labels.message}: ${message.trim()}`
}

export function whatsappUrl(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export function mailtoUrl(address, subject, body) {
  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
