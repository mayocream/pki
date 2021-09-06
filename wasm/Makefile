.PHONY: test

GOROOT?=`go env GOROOT`

build: build-pki-wasm copy-wasm-js

copy-wasm-js:
	cp $(GOROOT)/misc/wasm/wasm_exec.js ./dist

build-pki-wasm:
	tinygo build -target wasm -o dist/pki.wasm ./pki

test: build
	cp -r dist test/dist
	go run test/main.go