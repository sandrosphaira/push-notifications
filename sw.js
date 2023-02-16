self.addEventListener('push', a => {
  self.registration.showNotification('PlanetPlay', {
    title: 'Amazing!!',
    body: 'Plague Inc: Envolved with 50% off - Buy now!',
    vibrate: [200, 100, 200],
    sound: 'default',
    icon: 'https://content.planetplay.com/plague_logo.webp',
    badge: 'https://content.planetplay.com/auth0-logo.webp'
  })
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  event.waitUntil(self.clients.openWindow('https://planetplay.com/'))
})
