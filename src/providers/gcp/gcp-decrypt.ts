import { KeyManagementServiceClient } from '@google-cloud/kms'

import credentials from './credentials'

const client = new KeyManagementServiceClient()

export default async function decryptSymmetric({
  dataToDecrypt,
}: {
  dataToDecrypt: Uint8Array,
}) {
  const keyName = client.cryptoKeyPath(
    credentials.projectId,
    credentials.locationId,
    credentials.keyRingId,
    credentials.keyId,
  )

  const [decryptResponse] = await client.decrypt({
    name: keyName,
    ciphertext: dataToDecrypt,
  })

  // TODO: Do we need to do this check? 
  if (decryptResponse.plaintext === null || decryptResponse.plaintext === undefined) {
    throw new Error('decryptResponse.plaintext is null/undefined')
  }

  return decryptResponse.plaintext.toString()
}