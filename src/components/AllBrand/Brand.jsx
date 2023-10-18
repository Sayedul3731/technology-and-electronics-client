import PropTypes from 'prop-types';

const Brand = ({brand}) => {
    const {name, photo} = brand;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='p-4 rounded-xl h-[300px]' src={photo} alt="Brand Name" /></figure>
            <div className="card-body flex justify-center items-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
}
export default Brand;