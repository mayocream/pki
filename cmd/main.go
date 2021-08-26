package main

import (
    "encoding/pem"
    "flag"
    "fmt"
    "io/ioutil"
    "os"

    "github.com/google/certificate-transparency-go/x509"
    "github.com/mayocream/pki/pkg/x509util"
)

var (
    cert = flag.String("cert", "", "cert file")
    csr = flag.String("csr", "", "csr file")
)

func init() {
    flag.Parse()
}

func main() {
    if len(*cert) > 0 {
        certPEM, err := ioutil.ReadFile(*cert)
        if err != nil {
            fmt.Printf("cert file read err: %s", err)
            os.Exit(1)
        }
        block, _ := pem.Decode(certPEM)
        cert, err := x509.ParseCertificate(block.Bytes)
        if err != nil {
            fmt.Printf("cert pem parse err: %s", err)
            os.Exit(1)
        }
        info := x509util.CertificateToString(cert)
        fmt.Println(info)
    }
    if len(*csr) > 0 {
        csrPEM, err := ioutil.ReadFile(*csr)
        if err != nil {
            fmt.Printf("csr file read err: %s", err)
            os.Exit(1)
        }
        block, _ := pem.Decode(csrPEM)
        csr, err := x509.ParseCertificateRequest(block.Bytes)
        if err != nil {
            fmt.Printf("csr pem parse err: %s", err)
            os.Exit(1)
        }
        info := x509util.CertificateRequestToString(csr)
        fmt.Println(info)
    }
}
