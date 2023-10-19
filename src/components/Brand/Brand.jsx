import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { _id, name, photo } = brand;
    return (
        <NavLink to={`/brand/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='p-4 rounded-xl h-[300px]' src={photo} alt="Brand Name" /></figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </NavLink>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
}
export default Brand;