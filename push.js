var push = require('web-push')

const vapidKeys = {
  publicKey:
    'BD_BBH-PmtlCDoyzok68lt1p7U1J15UWBFnyuMq3e3a5AKT47tLLEk0N2uqWFhAaGLy_vA8v8WZWPi01n0c_sdo',
  privateKey: 'D0bEcQ9yDlmifmsGjmhpYdXRYXmZO95dPBaHYX8mvnc'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/dN_9u10lID0:APA91bE7w0bcSVCYlrJN3rE_9DTo0caqO4D4aYalhd_03YckqlN_7jyL5wsktB_dVz2HCDoJOuglv-gtX3MAob4_flwdsRkP5sdnybwepp6p8nIy-LA3MdsItXkqVR50xjfVV_XAudYx',
  expirationTime: null,
  keys: {
    p256dh:
      'BGf6Iq-F2SxiiZya1l8KP4Gk4m5cHxz9d8pETOEA6SgXovVzSfoFCfX5dqnzjo8CjewXymzDqsKMQkaTiS3ogSk',
    auth: 'p03P4GriCsc6hgNpzaVC-w'
  }
}

push.sendNotification(sub, 'Xuxuzinho')
