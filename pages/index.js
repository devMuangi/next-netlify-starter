import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import { Link } from '@chakra-ui/next-js'
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* <Head>
        <title>comido school eldoret</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

<Head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <meta name="description" content="Comido school application" />
  <meta name="theme-color" content="#000" />
  <title>Comido | School | Eldoret</title>
  <link rel="manifest" href="/manifest.json" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-icon.png"></link>
</Head>;

      <main>
        <Header title="Welcome to Comido school Eldoret" />
        <p className="description">
          One Heart, One Mind.
        </p>
        <p className="description">
          What is your role at comido school eldoret?
        </p>
        <ul className="start-menu">
          <li>
            <Link href="/parent">
              <p>Parent</p>
            </Link>
          </li>
          <li>
            <Link href="/teacher">
              <p>Staff</p>
            </Link>
          </li>
          <li>
            <Link href="/pupil">
              <p>Pupil</p>
            </Link>
          </li>
          <li>
            <Link href="/visitor">
              <p>Visitor</p>
            </Link>
          </li>
         
        </ul>
      </main>

      <Footer />
    </div>
  )
}
