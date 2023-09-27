import Gallery from "../Gallery/Gallery";
import 'react-tabs/style/react-tabs.css';
import OurServices from "../OurServices/OurServices";
import Review from "../Review/Review";
import Categories from "../Categories/Categories";


const Home = () => {
  
  document.title = "Car Toys Land";

  return (
    <div className="space-y-12 pt-2 mb-10">
      <Gallery></Gallery>
      <Categories></Categories>
      <Review></Review>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;