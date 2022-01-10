import * as esbuild from "esbuild"

function build(){
    esbuild.build({
        entryPoints: ["./src/index.ts"],
        platform: 'node',
        bundle: true,
        outdir: './dist',
    })
}

build()