import never from 'never'
import { KeyManagementServiceClient } from '@google-cloud/kms'

import credentials from './credentials'

const client = new KeyManagementServiceClient()

export default async function encryptSymmetric({ 
  dataToEncrypt,
}: {
  dataToEncrypt: Buffer,
}) {
  const keyName = client.cryptoKeyPath(
    credentials.projectId,
    credentials.locationId,
    credentials.keyRingId,
    credentials.keyId,
  )
  
  const [encryptResponse] = await client.encrypt({
    name: keyName,
    plaintext: dataToEncrypt,
  })

  const ciphertext = encryptResponse.ciphertext ?? never('ciphertext is undefined or null')
  if (typeof ciphertext === 'string') throw new Error('this is a string')

  return ciphertext
}
