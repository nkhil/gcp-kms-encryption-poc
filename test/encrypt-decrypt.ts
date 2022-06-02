import test from 'ava'
import * as fs from 'fs'
import * as path from 'path'
import { Buffer } from 'buffer'
import encrypt from '../src/encrypt'
import decrypt from '../src/decrypt'

test('can encrypt and decrypt text', async t => {
  const filePath = path.join(__dirname, './test-files/post_01.md')
  const testFileBuffer = fs.readFileSync(filePath)
  const encrypted = await encrypt(testFileBuffer) 
  const decrypted = await decrypt(encrypted)
  t.is(Buffer.compare(testFileBuffer, Buffer.from(decrypted)), 0) // 0 = true, -1 = false
})
