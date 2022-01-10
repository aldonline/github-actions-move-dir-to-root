import * as fs from "fs-extra"
import * as core from "@actions/core"
import * as cpx from "cpx"
import path from "path";

export async function foo(){
    try {
        const dir = core.getInput("dir");
        const src_glob = path.posix.resolve(process.env['GITHUB_WORKSPACE']!, dir, "**", "*");
        await new Promise<void>((res, rej) => {
            cpx.copy(src_glob, process.env['GITHUB_WORKSPACE']!+"/", (err) => err ? rej(err) : res())
        })
        // await fs.copy(dir, process.env['GITHUB_WORKSPACE']!)
    } catch(e: any) {
        core.setFailed(e.message);
    }
}