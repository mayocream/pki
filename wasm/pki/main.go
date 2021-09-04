// +build js,wasm
package main

//go:generate cp $GOROOT/misc/wasm/wasm_exec.js .

import (
	"syscall/js"
)

// This calls a JS function from Go.
func main() {
	js.Global().Set("PKI_certificateToString", js.FuncOf(certificateToString))
	js.Global().Set("PKI_certificateRequestToString", js.FuncOf(certificateRequestToString))

	println("PKI WASM running.")
	select {}
}
