import SectionTitle from "../../../components/SectionTitle";


const Review = () => {

    return (
        <div>
            <SectionTitle heading={"Customers Reviews"} subHeading={"please put your valuable review"}></SectionTitle>
            <div className="w-full px-4 shadow-lg" >
                <div className="lg:flex py-6">

                    <div className="lg:w-1/3">
                        <div className="avatar flex justify-center">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center py-2">Jackson Williams</h4>
                        <p className="p-4 mb-5"><small>I recently had the pleasure of purchasing car toys from Car Toys Land, and I must say, it was an outstanding experience from start to finish. Their fantastic selection of car toys, ranging from classic vintage models to modern sports cars, is truly impressive. The attention....</small><a href="">more</a></p>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="avatar flex justify-center">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center py-2">Nathan Hayes</h4>
                        <p className="p-4 mb-5"><small>I had an amazing experience shopping for car toys on Car Toys    Land
                            . Their extensive collection of car toys, featuring a wide range of brands and models, left me in awe. The attention to detail and craftsmanship in each miniature replica was truly impressive...</small><a href="">more</a></p>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="avatar flex justify-center">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center py-2">Emma Anderson</h4>
                        <p className="p-4"><small>I recently discovered Car Toys Land , and I could not be happier with my car toy purchase. Their vast selection of car toys is a treasure trove for any collector or enthusiast. From classic models to modern super cars, they have something for every taste...</small><a href="">more</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;