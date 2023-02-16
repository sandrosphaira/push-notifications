self.addEventListener('push', a => {
  var jsonData = a.data.text()
  console.log(jsonData)
  self.registration.showNotification('Jovem', {
    title: 'My Notification Title',
    body: 'This is the notification message',
    vibrate: [200, 100, 200],
    sound: 'default'
  })
})
