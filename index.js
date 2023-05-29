const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await operations.listContacts();
      console.table(data);
      break;

    case "get":
      const contact = await operations.getContactById(id);
      console.table(contact);
      break;

    case "add":
      break;
    case "remove":
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "read" });
