self.addEventListener('push', a => {
  var jsonData = JSON.parse(a.data.text())
  console.log(jsonData)
  self.registration.showNotification(a, {})
})
