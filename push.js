var push = require('web-push')

const vapidKeys = {
  publicKey:
    'BD_BBH-PmtlCDoyzok68lt1p7U1J15UWBFnyuMq3e3a5AKT47tLLEk0N2uqWFhAaGLy_vA8v8WZWPi01n0c_sdo',
  privateKey: 'D0bEcQ9yDlmifmsGjmhpYdXRYXmZO95dPBaHYX8mvnc'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    'https://web.push.apple.com/QMNiNEmNtUa7y0fvMPLyecwCVXoOnkarKyTUbZZ9hgc5pe_NrjArXf7WQWGwAaLOUt1XeqzsB8utHdZpiSVp1SvtEmku_AWrl45V8n_ieLZS6sKnrLM0VGORa-I0R7WmZj0fKPQnXhWtronicrKEJ7e_5bHkeiOx8XYnK6rMEoM',
  keys: {
    p256dh:
      'BBWyt-buO1qADdE3gF_IdWMu2undAZi1r45PwliuH5rx4pCdtHDfjWOWUK-fICM3V0MP5_MKO4D60O8HDlz1csg',
    auth: 'x5gQiqZLT-yPpquUz6ijRw'
  }
}

push.sendNotification(sub, 'test message')
