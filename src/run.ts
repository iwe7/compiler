import { resolve } from "path";
import { ofSourceFile } from "./utils/source_file";
import { writeFileSync } from "fs";
ofSourceFile(resolve(__dirname, "test/if.ts")).subscribe(res => {
  writeFileSync(resolve(__dirname, "a.json"), JSON.stringify(res, null, 2));
});
