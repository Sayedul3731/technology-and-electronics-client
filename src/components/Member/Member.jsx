import PropTypes from 'prop-types';

const Member = ({ member }) => {
    const { name, photo, title } = member;
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                <img className='w-full h-full' src={photo} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-green-600 to-green-400 lg:from-sky-600 to-sky-400 bg-clip-text">
                    {title}
                </p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
                <a
                    href="#facebook"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                >
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                    href="#twitter"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                    href="#instagram"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-sky-600 to-sky-400 bg-clip-text"
                >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
};

Member.propTypes = {
    member: PropTypes.object
}
export default Member;