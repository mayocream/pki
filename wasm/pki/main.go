package main

// This calls a JS function from Go.
func main() {
	println("PKI WASM running.")
}

// This function is exported to JavaScript, so can be called using
// exports.multiply() in JavaScript.
//export multiply
func multiply(x, y int) int {
    return x * y;
}
