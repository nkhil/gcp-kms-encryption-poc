import encryptUsingGcp from './providers/gcp/gcp-encrypt'

export default async function encrypt (file: Buffer): Promise<Uint8Array> {
  return encryptUsingGcp({
    dataToEncrypt: file,
  })
}
