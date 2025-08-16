import Image from "next/image";

import logo from '../public/logo.png'

export default function Logo() {
    return (
        <div>
            <Image src={logo} alt="Eezdra Logo" width={150} height={100}/>
        </div>
    )
}