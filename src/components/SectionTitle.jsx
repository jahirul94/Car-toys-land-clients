
const SectionTitle = ({ heading, subHeading, hide }) => {
    return (
        <div className="text-center mt-28 py-8 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">{heading}</h2>
            {subHeading && <p className="text-lg font-medium mb-2">{subHeading}</p>}
            <dir hidden={hide} className="border-b-2 border-slate-300 mb-6"></dir>
        </div>
    );
};

export default SectionTitle;