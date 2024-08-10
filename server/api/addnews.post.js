import * as path from "node:path";
import * as fs from "node:fs";

export default defineEventHandler(async (event) => {
  // handle POST requests for the `api/foo` endpoint
  const filePath = path.join(process.cwd(), "public", "test.json");
  const body = await readBody(event)
  await fs.promises.writeFile(filePath, JSON.stringify(body), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  return {
    data: "test success",
    event
  };
});
