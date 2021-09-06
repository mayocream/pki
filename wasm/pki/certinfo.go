package main

import (
	"encoding/pem"

	"github.com/google/certificate-transparency-go/x509"
	"github.com/mayocream/pki/pkg/x509util"
)

//export certificateToString
func certificateToString(certPEM string) interface{} {
    done := make(chan struct{}, 0)
	block, _ := pem.Decode([]byte(certPEM))
	if block == nil {
		return nil
	}
	cert, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		return nil
	}
    var info interface{}
	go func() {
		info = x509util.CertificateToString(cert)
        done <- struct{}{}
	}()
    <-done
	return info
}
