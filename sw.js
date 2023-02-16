self.addEventListener('push', a => {
  self.registration.showNotification(a, {})
})
