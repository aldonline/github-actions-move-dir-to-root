import * as fs from "fs-extra"

fs.outputFileSync("/tmp/src1/existing.txt", "existing")
fs.copySync("src", "/tmp/src1")