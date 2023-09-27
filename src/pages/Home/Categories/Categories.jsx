import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Toys from "../Toys/Toys";

const Categories = () => {

    const [toys, setToys] = useState([])
    const [tabs, setTabs] = useState('sports car')

    useEffect(() => {
        axios.get(`https://assignment-eleven-server-rose.vercel.app/categoryData?category=${tabs}`)
            .then(data => setToys(data.data))
    }, [tabs])

    return (
        <div>
            <div className="rounded-lg my-4 shadow-lg">
                <SectionTitle heading={`Find Your Toy With You're Favorite Category`} hide={"hide"} subHeading={"Explore Our Platform"}></SectionTitle>
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
                <div className="grid gap-4 px-4 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        toys?.map(toy => <Toys key={toy._id} toy={toy}></Toys>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Categories;