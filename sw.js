self.addEventListener('push', a => {
  var jsonData = a.data.text()
  console.log(jsonData)
  self.registration.showNotification('EUA!', {
    title: 'Amazing!!',
    body: 'This is the notification message',
    vibrate: [200, 100, 200],
    sound: 'default',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz32ep-zpOj3w7jD3MmBJYEpdqzek8CJYbyg&usqp=CAU',
    badge:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWkEjBwGx_36HZqj1cwtI9ncdDtkDXH7QdQ&usqp=CAU',
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
