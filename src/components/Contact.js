import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faCircleCheck } from "@fortawesome/free-solid-svg-icons"


import "../styles/Contact.css"
import FormGroup from "./FormGroup"

function Contact() {
    const [formData, setFormData] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleFormUpdate = (e) => {
        setFormData(() => ({ ...formData, [e.target.name]: e.target.value }))
    }

    const handleSend = e => {
        e.preventDefault()
        e.target.submit()
        setFormData({})
        setSubmitted(true)



    }


    return (
        <section id="contact">
            <div className="contact-main-content">
                <p className="contact-call-to-action">Want to know more?</p>
                <div className="contact-form-container">
                    <form
                        action="https://formspree.io/f/mdaqoykd"
                        method="post"
                        onSubmit={e => handleSend(e)}
                        target="_blank"
                    >
                        {
                            submitted ?
                                <div className="form-submit-success">
                                    <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                                    <p>Your message has been sent.</p>
                                </div> :

                                <>
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
                                        textarea
                                    />


                                    <button type="submit">Send</button>
                                </>
                        }
                    </form>






                </div>
            </div>
        </section>
    )
}

export default Contact