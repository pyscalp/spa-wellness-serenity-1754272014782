import './style.css'
import { App } from './App.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.mount('#app')
  
  // Add loading animation
  const loader = document.getElementById('loader')
  if (loader) {
    loader.style.display = 'none'
  }
})