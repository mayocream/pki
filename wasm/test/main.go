package main

import (
	"flag"
	"log"
	"net/http"
)

var addr = flag.String("addr", ":8083", "")

func main() {
    http.Handle("/", http.FileServer(http.Dir("./test")))
    log.Println("listen: ", *addr)
    http.ListenAndServe(*addr, nil)
}
