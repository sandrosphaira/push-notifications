var push = require('web-push')

const vapidKeys = {
  publicKey:
    'BD_BBH-PmtlCDoyzok68lt1p7U1J15UWBFnyuMq3e3a5AKT47tLLEk0N2uqWFhAaGLy_vA8v8WZWPi01n0c_sdo',
  privateKey: 'D0bEcQ9yDlmifmsGjmhpYdXRYXmZO95dPBaHYX8mvnc'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    'https://web.push.apple.com/QCP6rWe6aCuUMUr6r4yvIT4rCMPrkaVe45E8oMp0oQe-HdhDMpG3RkdgJZeBT8iXZdrR2qgiKqnboFNdWLifZ-IIoOo8QFcmWiMAtZMH2ft6owKdVTngxpZmJ2xSKswQn-G5_ZOj3vgaEEAWXbcccmdXzQk_Y3R6DCpWDLJLnco',
  keys: {
    p256dh:
      'BGV9bEFXgGMULDkoF1yu-Fxm-XVXyhA7HqyxOWJOVgelyOjc4b127JsDcEn-KRxhtwKT9O4RcgxhmvqlfBETsoc',
    auth: 'QH-mn48j8BRQYBkYUNIdqA'
  }
}

push.sendNotification(sub, 'test message')
