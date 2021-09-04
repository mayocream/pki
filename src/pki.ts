const w = window as any

const certificateToString = (pem: string) => {
  return w.PKI_certificateToString(pem)
}

const certificateRequestToString = (pem: string) => {
  return w.PKI_certificateRequestToString(pem)
}

export { certificateToString, certificateRequestToString }
