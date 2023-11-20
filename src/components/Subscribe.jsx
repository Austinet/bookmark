import { useState } from "react"
import error from "../assets/icons/icon-error.svg"


const Subscribe = () => {
  const [validate, setValidate] = useState(false)
  return (
    <section id="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-container__header">
          <h3>35,000+ ALREADY JOINED</h3>
          <h2>Stay up-to-date with what we’re doing</h2>
        </div>
        <div>
          <form className="subscribe-container__form">
          <div className="subscribe-container__form--input">
            <input type="email" name="email" id="email"placeholder="Enter your email address" className={validate ? "validate": ""} required/>
            <span>Whoops, make sure it&apos;s an email</span>
            <img src={error} alt="invalid email address" />
          </div>
          <button type="submit" onClick={() => setValidate(true)}>Contact Us</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe