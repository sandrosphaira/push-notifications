self.addEventListener('push', a => {
  var jsonData = a.data.text()
  console.log(jsonData)
  self.registration.showNotification('Joao!', {
    title: 'Chique jovem',
    body: 'This is the notification message',
    vibrate: [200, 100, 200],
    sound: 'default',
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
