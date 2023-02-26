import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const smallData = [
  {
    img: "https://links.papareact.com/5j2",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/1to",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/40m",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/msp",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://links.papareact.com/2k3",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/ynx",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/kji",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://links.papareact.com/41m",
    location: "Hove",
    distance: "2-hour drive",
  },
];

const mediumData = [
  { img: "https://links.papareact.com/2io", title: "Outdoor getaways" },
  { img: "https://links.papareact.com/q7j", title: "Unique stays" },
  { img: "https://links.papareact.com/s03", title: "Entire homes" },
  { img: "https://links.papareact.com/8ix", title: "Pet allowed" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          {/* pull some data on the server - API  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp")
//     .then((res) => res.json())
//     .catch((error) => {
//       console.log(error);
//       return null;
//     });

//   return {
//     props: {
//       exploreData,
//     },
//   };
// }
