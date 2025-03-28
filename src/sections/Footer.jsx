import {footerSocialLinks} from "../constants/index.js";
import PlayOnce from "../constants/FooterLinks.jsx";
import FooterLinks from "../constants/FooterLinks.jsx";

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

            <FooterLinks />

            <p className="text-white-500">© Srisabarikkumar. All rights reserved.</p>
        </section>
    )
}
export default Footer
