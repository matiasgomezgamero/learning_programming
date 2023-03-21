import inquirer from "inquirer";

export default async function ask(message) {
  const { response } = await inquirer.prompt({
    type: "input",
    name: "response",
    message,
  });
  return response;
}
