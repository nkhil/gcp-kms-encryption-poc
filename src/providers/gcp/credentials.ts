import { cleanEnv, str } from 'envalid'
import * as process from 'process'
import * as dotenv from 'dotenv'

dotenv.config()

const enn = cleanEnv(process.env, {
  FIRESTORE_PROJECT_ID: str(),
  FIRESTORE_LOCATION_ID: str(),
  FIRESTORE_KEYRING_ID: str(),
  FIRESTORE_KEY_ID: str(),
})

type KMSClientOptions = {
  projectId: string,
  locationId: string,
  keyRingId: string,
  keyId: string,
}

const kmsClientOptions: KMSClientOptions = {
  projectId: enn.FIRESTORE_PROJECT_ID,
  locationId: enn.FIRESTORE_LOCATION_ID,
  keyRingId: enn.FIRESTORE_KEYRING_ID,
  keyId: enn.FIRESTORE_KEY_ID,
}

export default kmsClientOptions
