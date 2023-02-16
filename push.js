var push = require('web-push')

const vapidKeys = {
  publicKey:
    'BD_BBH-PmtlCDoyzok68lt1p7U1J15UWBFnyuMq3e3a5AKT47tLLEk0N2uqWFhAaGLy_vA8v8WZWPi01n0c_sdo',
  privateKey: 'D0bEcQ9yDlmifmsGjmhpYdXRYXmZO95dPBaHYX8mvnc'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/cBBP45847YY:APA91bGyFflFBMZJ3kVctsk0I4F8rqz2Ys4CS3m5EysTITYubLBeOzWlQxlBhAtV8PoRozh5TBbzM1XdQpfJB9s5AkcoOz2sWi4wEphftvJbR115ZM_vgn29aLx8rV3OvmSYenhbAyXT',
  expirationTime: null,
  keys: {
    p256dh:
      'BAuKqyR1fa5YZfciIudT0KVa5l-8ET4ZfY05E0PJwT9br2Q-7M6gNGIYYxZNIo8c1zWhVxLwAEhhfqhuuMFYS4k',
    auth: 'a3_tUrXuSbVLVYVxk1-c8Q'
  }
}

push.sendNotification(sub, 'test message')
