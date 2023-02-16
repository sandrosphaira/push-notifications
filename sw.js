self.addEventListener('push', a => {
  self.registration.showNotification('PlanetPlay Top!', {
    title: 'Amazing!!',
    body: 'Plague Inc: Envolved with 50% off - Buy now!',
    vibrate: [200, 100, 200],
    sound: 'default',
    icon: 'https://content.planetplay.com/plague_logo.webp',
    badge: 'https://content.planetplay.com/auth0-logo.webp'
  })
})
