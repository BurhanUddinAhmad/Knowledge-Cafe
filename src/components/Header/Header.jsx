import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center my-5 border-b-2 pb-4'>
            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
            <div>
                <img src={profile} alt="Profile" />
            </div>
        </header>
    );
};


export default Header;