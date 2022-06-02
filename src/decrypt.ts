import decryptUsingGcp from './providers/gcp/gcp-decrypt'

export default async function decrypt(data: Uint8Array): Promise<string> {
  return decryptUsingGcp({
    dataToDecrypt: data,
  })
}
