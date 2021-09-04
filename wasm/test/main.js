const go = new Go()
await WebAssembly.instantiateStreaming(fetch('./dist/pki.wasm'), go.importObject).then((result) => {
  go.run(result.instance)
})

console.log(PKI_certificateToString(
`-----BEGIN CERTIFICATE-----
MIIENTCCAh2gAwIBAgIUIhNlL1gBDb3q0U4UQ56NnS+H7K0wDQYJKoZIhvcNAQEN
BQAwHzEdMBsGA1UEChMUQ0kxMjMgUk9PVCBBVVRIT1JJVFkwHhcNMjEwODI2MDk0
ODAwWhcNMjIwODI2MDk0ODAwWjAnMRAwDgYDVQQKEwdjbHVzdGVyMRMwEQYDVQQD
EwpnYXRla2VlcGVyMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEDjskHKs1++Cj
gLn+sFBTWYzGUcaLswwqajLMlMp7fyC+Rmc6l4qdl4IBfyxKW5pEcctw0xnsCNHP
U1P/Xuq916OCASowggEmMA4GA1UdDwEB/wQEAwIFoDAdBgNVHSUEFjAUBggrBgEF
BQcDAQYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUQhJih7VMb7Hg
oz4GGXrUEq/iftEwHwYDVR0jBBgwFoAUEXJd+HFMKkCpNrdWQpr2x5k9hZswMQYI
KwYBBQUHAQEEJTAjMCEGCCsGAQUFBzABhhVodHRwOi8vMTI3LjAuMC4xOjgwODIw
RwYDVR0RAQH/BD0wO4IKZ2F0ZWtlZXBlcoIFbG9jYWyCBHRlc3SGIHNwaWZmZTov
L3NpdGUvY2x1c3Rlci9nYXRla2VlcGVyMCsGCCoDBAUGBwgBBB97ImF0dHJzIjp7
ImsxIjoidjEiLCJrMiI6InYyIn19MA0GCSqGSIb3DQEBDQUAA4ICAQBnCMv2b8xU
VURrDujy6psl4nCcxu23FH8GV70hdHVw0q5/jdF22dLc/NxYnzvPkWtEo0Bpqs2g
jYuzwEnaDcDhuM36WPdRcZ1xTd2MGcdPyQCF9YufSApWXcutnnO43CI7SO0Z7MK2
tO9J3d1XH4RiPdDyJziXH/3m4JwVEKECXxrIf4Ho4pErd3B21m42+82E9iDn1WDB
9xrGQE7U/FomuBUXKFIWqo2iHq0TlqEDzRTOA0eBDFNwqvCSTve8HfcpJgx0YVSW
MlEC5srnB4SQfQh2qjCQOz/UHNwldwv7osRresAQqO8fHV/AWg3W06GmhnAqzF0E
TrzEslP6m8uO1puoPUlTKxcue7TDZkU2Q8XpiPaXCkSbC5tJdxVNCgQMksD39jpK
uBlnOHMjp1ChKvRYyK337NyYbfxt/QEYRv1ad93aLqmH8KsYdC+x/5KP3Ta7L05o
y5CQB2hX/eAzdaB7avyNxF4RdmtbKwre1QF6wDY589cNvrqLQtUpNskRf0LpmIFS
5hSdbnPSnwugERcDGeZ2uqXuWZprb8HQeYghiJXRdC002e38rWGQn8AyyaQu1AHu
6q+1e9K4P6BCzT9z9sUmeVxK6+5r3j4K35QwKXPmaw9gz+1b+4npAmM6y3RU+Upu
6ID7fx0gv42WzBMvVJSDlE9zFEe5NbtXnA==
-----END CERTIFICATE-----`
))