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
  console.log(toys);

  return (
    <div className="space-y-10 pt-2">
      <Slider></Slider>
      <Gallery></Gallery>
      <div>
        {/* start  */}
        <Tabs>
          <TabList>
            <Tab onClick={() => setTabs('teddy bear')}>Teddy bear</Tab>
            <Tab onClick={() => setTabs('cats')}>Cats</Tab>
            <Tab onClick={() => setTabs('dogs')}>Dogs</Tab>
          </TabList>
        </Tabs>
        {/* end  */}
        <div className="md:grid grid-cols-3 gap-4 my-10 min-h-screen">
          {
            toys.map(toy => <Toys key={toy._id} toy={toy}></Toys>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;