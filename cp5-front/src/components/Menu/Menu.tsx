import Link from "next/link";

export default function Menu(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link href={"/"}>Página home</Link></li>
                    <li><Link href={"/calculo"}>Calculo de Velikovsky</Link></li>
                    <li><Link href={"/primeiraIdeia"}>Primeira ideia de Velikovsky</Link></li>
                    <li><Link href={"/segundaIdeia"}>segunda ideia de Velikovsky</Link></li>
                    <li><Link href={"/terceiraIdeia"}>terceira ideia de Velikovsky</Link></li>
                </ul>
            </nav>
        </div>
    )

}