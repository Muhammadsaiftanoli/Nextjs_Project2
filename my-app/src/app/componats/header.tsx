import Link from "next/link";







export default function Header() {
    return (
        <div className="headercontainer">
            <h1>GIAIC</h1>
            <ul>
                <Link href={"/"}>
                <li>Portfolio</li>
                </Link>
                <Link href={"/about"}>
                <li>About</li> 
                </Link>
                <Link href={"/contactus"}>
                <li>Contact us</li>
                </Link>
            </ul>
        </div>
    )
}