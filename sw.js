self.addEventListener('push', a => {
  var jsonData = JSON.parse(event.data.text())
  console.log(jsonData)
  self.registration.showNotification(a, {})
})
