self.addEventListener('push', a => {
  self.registration.showNotification('PlanetPlay Top!', {
    title: 'Amazing!!',
    body: 'Plague Inc: Envolved with 50% off - Buy now!',
    vibrate: [200, 100, 200],
    sound: 'default',
    icon: 'https://content.planetplay.com/plague_logo.webp',
    badge: 'https://content.planetplay.com/auth0-logo.webp',
    actions: [
      {
        action: 'exampleAction',
        type: 'button',
        title: 'Buy Now'
      }
    ]
  })
})

self.notificationActions = {
  // Your custom actions must be defined here

  exampleAction: function (customData) {
    console.log('exampleAction called with data: ' + customData)

    // You can use the notification "custom data" field to pass a param to your actions
  }
}
