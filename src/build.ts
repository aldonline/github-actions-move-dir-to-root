import * as esbuild from "esbuild"

export async function build(){
    await esbuild.build({
        entryPoints: ["./src/index.ts"],
        platform: 'node',
        bundle: true,
        outdir: './dist',
    })
}
