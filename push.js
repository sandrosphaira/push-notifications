var push = require('web-push')

const vapidKeys = {
  publicKey:
    'BD_BBH-PmtlCDoyzok68lt1p7U1J15UWBFnyuMq3e3a5AKT47tLLEk0N2uqWFhAaGLy_vA8v8WZWPi01n0c_sdo',
  privateKey: 'D0bEcQ9yDlmifmsGjmhpYdXRYXmZO95dPBaHYX8mvnc'
}

push.setVapidDetails('mailto:test@code.com', vapidKey.publicKey, vapidKeys.privateKey)

let sub = {}

push.sendNotification(sub, 'test message')
