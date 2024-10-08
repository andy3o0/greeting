import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const Home = () => {

  const audioPlayer = useRef();
  const [open, setOpen] = useState(false)
  const [names, setNames] = useState("")


  useEffect(() => {

    if (open) {
      audioPlayer.current.play();
    }
  }, [open])

  useEffect(() => {
    function bubbles() {
      var count = 200;
      var section = document.querySelector("section");
      var i = 0;
      while (i < count) {
        var bubble = document.createElement("i");
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        var size = Math.random() * 10;
        bubble.style.left = x + "px";
        bubble.style.top = y + "px";
        bubble.style.width = 1 + size + "px";
        bubble.style.height = 1 + size + "px";
        bubble.style.animationDuration = 5 * size + "s";
        bubble.style.animationDelay = size + "s";

        section.appendChild(bubble);
        i++;
      }
    }
    bubbles();

    var countDownDate = new Date("01 January, 2023 00:00:00").getTime(), x = setInterval(function () { var e = (new Date).getTime(), o = countDownDate - e, t = Math.floor(o / 864e5), n = Math.floor(o % 864e5 / 36e5), a = Math.floor(o % 36e5 / 6e4), l = Math.floor(o % 6e4 / 1e3); document.getElementById("timer").innerHTML = t - 6 + "<font color='#ff9100'> Days,</font> " + n + "<font color='#ff9100'> Hours,</font> " + a + "<font color='#ff9100'> Minutes,<br></font> " + l + "<font color='#ff9100'> Seconds <spna style='color:white'>Before</span> </font>", o < 0 && (clearInterval(x), document.getElementById("timer").innerHTML = "") }, 1e3);

  }, [])

  /////////////////////
  const router = useRouter()

  const { name } = router.query
  // console.log(name)

  return (
    <div className="">
      <Head>
        <title>Merry Christmas</title>
        {/* <meta property="og:site_name" content="Merry Christmas" /> */}
        {/* <meta property="og:title" content="Merry Christmas" /> */}
        <link rel="icon" href="/ogr.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="/ogr.webp" />
      </Head>

      <div className={` bg-[url('/bg.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center `}
      >

        <div className=' min-h-[200vh] 2xl:min-h-[100vh] md:my-auto overflow-hidden justify-between flex-wrap items-center md:overflow-auto  backdrop-brightness-50  relative  ' style={{ display: `${!open ? "flex" : "none"}` }}>
          {!name && (<div className='text-black w-full text-5xl absolute bottom-5 z-10 flex items-center justify-center  gap-5'>
            <input onChange={(e) => {
              setNames(e.target.value)
            }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the name of person to wish" />
            <a className='flex items-center' href={`/?name=${names}`}><button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
            </a>
          </div>)}
          {name && (<div className='text-black w-full text-5xl absolute bottom-5 z-10 flex items-center justify-center  gap-5'>
            <a className='flex items-center' href={`https://www.facebook.com/sharer/sharer.php?u=https://greeting-andy3o0.vercel.app/?name=${name}`}><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">FACEBOOK</button>
            </a>
            <a className='flex items-center' href={`whatsapp://send?text=https://greeting-andy3o0.vercel.app/?name=${name}`}><button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">WHATSAPP</button>
            </a>
          </div>)}
          <header className="bg-red-500 w-full backdrop-brightness-100 px-5 h-[50px] absolute flex justify-between items-center top-0">
            <a className='flex items-center font-sans' href={`https://business.mktimothy.com/`}><button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-bold focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pitch Your Idea</button>
            </a><a className='flex items-center font-sans' href={`https://investors.mktimothy.com/`}><button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-bold focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Invest In Uganda</button>
            </a>
          </header>
          <div className='h-[150vh] md:h-[100vh] px-10 pt-[50px]  md:px-40  lg:h-fit text-white  text-3xl md:text-5xl text-left leading-[2.5rem] md:leading-[4rem]'>
            <br />
            <span className='font-bold mb-10 animate-pulse'> Wishing You a Merry Christmas
              <p id='timer'></p>
            </span>
            <p>Best wishes for a joyous Christmas <br /> filled with love, happiness, and prosperity.<br /> May all that is beautiful, and meaningful <br /> and sparkle with joy and <br /> laughter throughout the coming year!</p>
            (Click on the tree to unwrap your gift) <br />
            {name && (<span className='font-bold pt-10 italic '>From {name}</span>)}
            <br />
          </div>
          {/* /////////////////////////////////////////// */}
          <div className='h-[100vh] px-5  md:px-40 lg:h-fit flex items-center m-auto justify-center '>
            <div onClick={() => {
              setOpen(true)
            }} className='tree cursor-pointer '>
              <div className='top tt1'>
                <span className='t1'></span>
                <span className='t2'></span>
                <span className='t3'></span>
                <span className='t4'></span>
              </div>
              <div className='top tt2'>
                <span className='t1'></span>
                <span className='t2'></span>
                <span className='t3'></span>
                <span className='t4'></span>
              </div>
              <div className='top tt3'>
                <span className='t1'></span>
                <span className='t2'></span>
                <span className='t3'></span>
                <span className='t4'></span>
              </div>
              <div className='top tt4'>
                <span className='t1'></span>
                <span className='t2'></span>
                <span className='t3'></span>
                <span className='t4'></span>
              </div>
              <div className='bottom tt1'>
                <span className='t1'></span>
                <span className='t2'></span>
                <span className='t3'></span>
                <span className='t4'></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden h-[100vh]  w-[100vw] relative" style={{ display: `${open ? "block" : "none"}` }}>
        <header className="bg-red-500 px-5 w-full h-[50px] absolute flex justify-between items-center top-0">
          <a className='flex items-center font-sans' href={`https://business.mktimothy.com/`}><button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-bold focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pitch Your Idea</button>
          </a><a className='flex items-center font-sans' href={`https://investors.mktimothy.com/`}><button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-bold focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Invest In Uganda</button>
          </a>
        </header>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className='sm:block hidden'></li>
          <li className='sm:block hidden'></li>
          <li className='sm:block hidden'></li>
          <li className='sm:block hidden'></li>
          <li className='md:block hidden'></li>
          <li className='md:block hidden'></li>
          <li className='md:block hidden'></li>
          <li className='md:block hidden'></li>
          <li className='md:block hidden'></li>
        </ul>
        <section className="bg-[url('/bg.jpeg')] bg-fixed bg-cover bg-no-repeat min-h-[100vh] bg-center">
          <div className="box">
            <div className="circle">
              <h2>Merry<br />Christmas <br />
                {name}
                <audio
                  ref={audioPlayer}
                  src={'/song.mp3'}
                  loop
                  preload="metadata"
                ></audio>
              </h2>
            </div>
          </div>
          {!name && (<div className='text-black text-5xl absolute bottom-5 z-10 flex items-center justify-center  gap-5'>
            <input onChange={(e) => {
              setNames(e.target.value)
            }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the name of person to wish" />
            <a className='flex items-center' href={`/?name=${names}`}><button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
            </a>
          </div>)}
          {name && (<div className='text-black text-5xl absolute bottom-5 z-10 flex items-center justify-center  gap-5'>
            <a className='flex items-center' href={`https://www.facebook.com/sharer/sharer.php?u=https://greeting-andy3o0.vercel.app/?name=${name}`}><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">FACEBOOK</button>
            </a>
            <a className='flex items-center' href={`whatsapp://send?text=https://greeting-andy3o0.vercel.app/?name=${name}`}><button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">WHATSAPP</button>
            </a>
          </div>)}

        </section>
      </div>
    </div>
  )
}

export default Home
