import {footerSocialLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t
        border-black-300 flex justify-between items-center
        flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                {footerSocialLinks.map((link) => (
                    <a key={link.id} href={link.href} target="_blank">
                        <div className="social-icon">
                            <img src={link.icon} alt={link.alt} className="size-1/2"/>
                        </div>
                    </a>
                ))}
            </div>

            <p className="text-white-500">© Srisabarikkumar. All rights reserved.</p>
        </section>
    )
}
export default Footer
