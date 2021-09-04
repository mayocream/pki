package main

import (
	"encoding/pem"
	"syscall/js"

	"github.com/google/certificate-transparency-go/x509"
	"github.com/mayocream/pki/pkg/x509util"
)

//export certificateToString
func certificateToString(this js.Value, args []js.Value) interface{} {
	certPEM := args[0].String()
	block, _ := pem.Decode([]byte(certPEM))
	if block == nil {
		return js.Null()
	}
	cert, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		return js.Null()
	}
	info := x509util.CertificateToString(cert)
	return info
}

//export certificateRequestToString
func certificateRequestToString(this js.Value, args []js.Value) interface{} {
	certPEM := args[0].String()
	block, _ := pem.Decode([]byte(certPEM))
	if block == nil {
		return js.Null()
	}
	csr, err := x509.ParseCertificateRequest(block.Bytes)
	if err != nil {
		return js.Null()
	}
	info := x509util.CertificateRequestToString(csr)
	return info
}
