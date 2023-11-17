import error from "../assets/icons/icon-error.svg"


const Subscribe = () => {
  return (
    <section>
      <div className="subscribe-container">
        <div className="subscribe-container__header">
          <h3>35,000+ ALREADY JOINED</h3>
          <h2>Stay up-to-date with what we’re doing</h2>
        </div>
        <div>
          <form className="subscribe-container__form">
          <div>
            <input type="email" name="email" id="email"placeholder="Enter your email address" required/>
          </div>
          <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe