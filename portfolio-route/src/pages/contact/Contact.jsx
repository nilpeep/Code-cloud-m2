import "./Contact"

const Contact = () => {
  return (
    <main class="contact">
        <h2>Contact Me ...</h2>
        <div class="contact__list">
          <div class="contact__item">
            <i class="fas fa-envelope"></i> Email
            <div class="text-secondary">wednesday@nevermoreacademy.edu</div>
          </div>
          <div class="contact__item">
            <i class="fas fa-mobile-alt"></i> Phone
            <div class="text-secondary">+40 (571) 360-1234</div>
          </div>
          <div class="contact__item">
            <i class="fas fa-map-marker-alt"></i> Address
            <div class="text-secondary">Strada Zamorei 1, Bușteni 105500, Romania</div>
          </div>
        </div>
      </main>
  )
}

export default Contact