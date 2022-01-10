import * as fs from "fs-extra"
import * as core from "@actions/core"

export async function foo(){
    try {
        const dir = core.getInput("dir");
        await fs.copy(dir, process.env['GITHUB_WORKSPACE']!)
    } catch(e: any) {
        core.setFailed(e.message);
    }
}