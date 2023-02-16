self.addEventListener('push', a => {
  var jsonData = a.data.text()
  console.log(jsonData)
  self.registration.showNotification(jsonData, {})
})
