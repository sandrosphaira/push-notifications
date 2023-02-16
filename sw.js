self.addEventListener('push', a => {
  var jsonData = a.data.text()
  console.log(jsonData)
  self.registration.showNotification('Plague Inc: Envolved with 50% off', {
    title: 'Amazing!!',
    body: 'Checkout this super discount!',
    vibrate: [200, 100, 200],
    sound: 'default',
    image: 'https://content.planetplay.com/plague_logo.webp',
    badge: 'https://content.planetplay.com/auth0-logo.webp',
    actions: [
      {
        action: 'reply',
        type: 'text',
        title: 'Reply',
        placeholder: 'Type text here'
      }
    ]
  })
})
