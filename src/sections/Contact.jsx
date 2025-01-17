import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();

    const {alert, showAlert, hideAlert} = useAlert();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    // service_7nh4yrb

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Srisabarikkumar',
                    from_email: form.email,
                    to_email: 'srisabarikkumar@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            setLoading(false);
            showAlert({
                show: true,
                text: 'Thank you for your message 😃',
                type: 'success',
            });

            setTimeout(() => {
                hideAlert(false);
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, [3000]);
        } catch (error) {
            console.log(error);
            showAlert({
                show: true,
                text: "I didn't receive your message 😢",
                type: 'danger',
            });
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center
            justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background"
                     className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-lg text-white-600 mt-3">
                        I specialize in creating responsive, user-friendly web solutions that drive results.
                        Currently, I am open to full time opportunities.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}
                          className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="ex., John Doe"
                                required
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                                required
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="Enter your message here"
                                required
                                rows={5}
                            />
                        </label>

                        <button className="field-btn" type="submit"
                                disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up"
                                 className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
