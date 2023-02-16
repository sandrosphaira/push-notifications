self.addEventListener('push', a => {
  console.log(a)
  self.registration.showNotification(a, {})
})
