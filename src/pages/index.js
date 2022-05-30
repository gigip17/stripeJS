import { useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Image from 'next/image';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const HomePage = () => {
    const router = useRouter();
    const { sucess, canceled } = router.query;



  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    //const query = new URLSearchParams(window.location.search);
    
    if(sucess !== undefined || canceled !== undefined) {
      if (sucess) {
      console.log('Order placed! You will receive an email confirmation.');
    }
    }
    

    if (canceled) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <div>
        <Image src='https://stripe-camo.global.ssl.fastly.net/https://d1wqzb5bdbcre6.cloudfront.net/e4c460de48d0050b7eba32dd439f52829b5addc3792fbe0a4e0c396e41d02dc9/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785444525364475a4b61554656513031756230397366475a735833526c633352664d556830536c7059553231475632394a576c683056336c5a4d6b705464326c4830304744375a49374945'
        alt='test'
        width={150}
        height={150}/>

        </div>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
};
export default HomePage;