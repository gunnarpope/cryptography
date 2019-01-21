var read = require('read')
read({ prompt: 'Password: ', silent: true }, function(er, password) {
  console.log('Your password is: %s', password)
})
