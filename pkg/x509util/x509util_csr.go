package x509util

import (
	"bytes"
	"fmt"

	"github.com/google/certificate-transparency-go/x509"
)

func copyCertificateRequestToCertificate(cr *x509.CertificateRequest) *x509.Certificate {
	cert := new(x509.Certificate)
	cert.Version = cr.Version + 1
	cert.Subject = cr.Subject
	cert.PublicKey = cr.PublicKey
	cert.PublicKeyAlgorithm = cr.PublicKeyAlgorithm
	cert.Extensions = cr.Extensions
	cert.DNSNames = cr.DNSNames
	cert.EmailAddresses = cr.EmailAddresses
	cert.IPAddresses = cr.IPAddresses
	cert.URIs = cr.URIs
	cert.Signature = cr.Signature
	cert.SignatureAlgorithm = cr.SignatureAlgorithm
	return cert
}

// CertificateRequestToString generates a string describing the given certificate request.
// The output roughly resembles that from openssl req -text
func CertificateRequestToString(cr *x509.CertificateRequest) string {
	cert := copyCertificateRequestToCertificate(cr)

	var result bytes.Buffer
	result.WriteString(fmt.Sprintf("Certificate Request:\n"))
	result.WriteString(fmt.Sprintf("    Data:\n"))
	result.WriteString(fmt.Sprintf("        Version: %d (%#x)\n", cert.Version, cert.Version-1))
	result.WriteString(fmt.Sprintf("        Subject: %v\n", NameToString(cert.Subject)))
	result.WriteString(fmt.Sprintf("        Subject Public Key Info:\n"))
	result.WriteString(fmt.Sprintf("            Public Key Algorithm: %v\n", publicKeyAlgorithmToString(cert.PublicKeyAlgorithm)))
	result.WriteString(fmt.Sprintf("%v\n", publicKeyToString(cert.PublicKeyAlgorithm, cert.PublicKey)))

	if len(cert.Extensions) > 0 {
		result.WriteString(fmt.Sprintf("        Attributes:\n"))
		result.WriteString(fmt.Sprintf("        Requested Extensions:\n"))
	}
	showSubjectAltName(&result, cert)

	showUnhandledExtensions(&result, cert)
	showSignature(&result, cert)

	return result.String()
}
