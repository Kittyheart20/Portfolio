// Quick test to see console errors
fetch('http://localhost:5173/')
  .then(res => res.text())
  .then(html => console.log('Server responding'))
  .catch(err => console.log('Server error:', err))
