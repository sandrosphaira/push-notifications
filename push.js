var push = require('web-push')

const vapidKeys = {
  publicKey:
    'BD_BBH-PmtlCDoyzok68lt1p7U1J15UWBFnyuMq3e3a5AKT47tLLEk0N2uqWFhAaGLy_vA8v8WZWPi01n0c_sdo',
  privateKey: 'D0bEcQ9yDlmifmsGjmhpYdXRYXmZO95dPBaHYX8mvnc'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    'https://web.push.apple.com/QL2p_qOYbpDdk64Mvt6sDO0KW4X9x4UeV9AmXkW6Ka8erM910dwrwTOKj-KS8L9ATI50uGDHR_-4QBKhRRdvAIdLQ69V8GIQL_6MtdsIK7GXOsiqfrkz_5FcnoBQ851JgV9vP25uegjNXo_OrseS0TAdV2JaLVRu4Cedu-s_zQ0',
  keys: {
    p256dh:
      'BGBIBx1JC7c59sy7BVAtWg69TF8pky-pK9w2eVFTZ0kHusIhg1Jt3hWEu63CYOVMyL971sAD0TKtI5eK-bMMMtY',
    auth: '0l2tCVwCUzJhdDtNJEDwzA'
  }
}

push.sendNotification(sub, 'test message')
