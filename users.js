import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "users.json";

export async function getUsers() {
  const data = await fs.readFile(fileName);
  return JSON.parse(data);
}



