import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";
import Toys from "../Toys/Toys";
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";


const Home = () => {
  const [toys, setToys] = useState([])
  const [ tabs , setTabs ] = useState('teddy bear')
  useEffect(() => {
    fetch(`http://localhost:5000/categoryData?category=${tabs}`,{
        method :"GET"
    })
      .then(res => res.json())
      .then(data => setToys(data))
  }, [tabs])

  return (
    <div className="space-y-12 pt-2">
      <Slider></Slider>
      <Gallery></Gallery>
      <div className="shadow-2xl rounded-2xl my-4 bg-slate-300">
         <h2 className="text-center text-4xl font-bold py-8">Find Your Toy With You're Favorite Category</h2>
          <Tabs>
            <TabList>
              <Tab onClick={() => setTabs('teddy bear')}>Teddy bear</Tab>
              <Tab onClick={() => setTabs('cats')}>Cats</Tab>
              <Tab onClick={() => setTabs('dogs')}>Dogs</Tab>
            </TabList>
          </Tabs>
          <div className="md:grid grid-cols-3 gap-4 py-10">
            {
              toys.map(toy => <Toys key={toy._id} toy={toy}></Toys>)
            }
          </div>
      </div>
    </div>
  );
};

export default Home;