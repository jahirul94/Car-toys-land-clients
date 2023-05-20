import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";


const Home = () => {
  document.title = "Car Toys Land" ;
  const [toys, setToys] = useState([])
  const [ tabs , setTabs ] = useState('sports car')
  useEffect(() => {
    fetch(`http://localhost:5000/categoryData?category=${tabs}`,{
        method :"GET"
    })
      .then(res => res.json())
      .then(data => setToys(data))
  }, [tabs])

  return (
    <div className="space-y-12 pt-2">
      <Banner></Banner>
      <Gallery></Gallery>
      <div className="shadow-md rounded-2xl my-4 bg-slate-300">
         <h2 className="text-center text-4xl font-bold py-8">Find Your Toy With You're Favorite Category</h2>
          <Tabs>
            <TabList>
              <Tab onClick={() => setTabs('sports car')}>Sports car</Tab>
              <Tab onClick={() => setTabs('truck')}>Truck</Tab>
              <Tab onClick={() => setTabs('regular car')}>Regular car</Tab>
            </TabList>
             <TabPanel></TabPanel>
             <TabPanel></TabPanel>
             <TabPanel></TabPanel>
          </Tabs>
          <div className="grid gap-4 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              toys.map(toy => <Toys key={toy._id} toy={toy}></Toys>)
            }
          </div>
      </div>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;