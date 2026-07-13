import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import FormGroup from "./FormGroup"

function Contact() {
    const [formData, setFormData] = useState({})

    const handleFormUpdate = (e) => {
        setFormData(() => ({ ...formData, [e.target.name]: e.target.value }))
    }

    const handleSend = e => {
        e.preventDefault()
        e.target.submit()
        setFormData({})



    }


    return (
        <section id="contact">
            <div className="contact-main-content">
                <span className="section-header-span">
                    <FontAwesomeIcon icon={faPhone} size="2xl" />
                    <h2>Experience</h2>
                </span>

                <p>Want to know more?</p>
                <div className="contact-form-container">
                    <form
                        action="https://formspree.io/f/mdaqoykd"
                        method="post"
                        onSubmit={e=>handleSend(e)}
                    >
                        <h3>Send a Message</h3>
                        <FormGroup
                            type="text"
                            value={formData?.name || ""}
                            onChange={handleFormUpdate}
                            placeholder="John Doe"
                            name="name"
                            label="Name"
                        />

                        <FormGroup
                            type="text"
                            value={formData?.email || ""}
                            onChange={handleFormUpdate}
                            placeholder="email@site.com"
                            name="email"
                            label="Email"
                        />

                        <FormGroup
                            type="text"
                            value={formData?.query || ""}
                            onChange={handleFormUpdate}
                            placeholder="Tell me more about..."
                            name="query"
                            label="Your Message"
                        />


                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact