const fs = require('node:fs/promises');
const path = require('node:path');

const contactsPath = path.join('src', 'db', 'contacts.json');

async function readContacts() {
  const data = await fs.readFile(contactsPath, { encoding: 'utf-8' });

  return JSON.parse(data);
}

async function writeContacts(contacts) {
  return fs.writeFile(contactsPath, contacts);
}

async function listContacts() {
  const contacts = await readContacts();
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await readContacts();

  const contact = contacts.find(contact => contact.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await readContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index !== -1) {
    const removedContact = contacts.splice(index, 1);
    return removedContact[0];
  } else {
    return null;
  }
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

module.exports = {
  readContacts,
  writeContacts,
};
