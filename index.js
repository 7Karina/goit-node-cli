const contacts = require('./contacts');
const { Command } = require('commander');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;

    case 'add':
      newContact = await contacts.addContact(name, email, phone);
      console.table(newContact);
      break;

    case 'remove':
      deleteContact = await contacts.removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
