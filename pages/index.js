import Image from 'next/image'
import Link from 'next/link'
import Coffee from '../public/cofee.jpg'


export default function Home() {
  return (
    <div>
        <Link href={'/chanchitos/feliz'}>Ir a chanchitos</Link>
        <p>Hola cerdo</p>

        {/* <Image src = '/cofee.jpg' width={400} height= {400}/> */}
        {/* <Image src = '/cofee.jpg' layout='fill'/> */}
        <Image src = {Coffee} width={400} height= {400}/>

    </div>
  )
}
