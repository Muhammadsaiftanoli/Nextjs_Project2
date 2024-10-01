import Footer from "../componats/footer";
import Header from "../componats/header";






export default function Contact() {
    return (
        <div>
        <Header />
        <h1>Contact us</h1>
        {/* <h1>Email:muhammadsaifkhantanoli@gmail.com</h1> */}
        <h1>Email: <a href="mailto:muhammadsaikhantanoli@gmail.com">muhammadsaikhantanoli@gmail.com</a></h1>
        <h1>Phone: +92-316-286-3836</h1>
       
        <Footer />
    </div>
    )
}