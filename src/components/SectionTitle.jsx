
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mt-14 py-4 px-4">
            <h2 className="text-2xl md:text-4xl font-bold font-[poppins] mb-2">{heading}</h2>
            <p className="text-lg font-medium mb-6">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;