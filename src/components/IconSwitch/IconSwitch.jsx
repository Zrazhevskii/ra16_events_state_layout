import './IconSwitch.css';

export const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <div className='icons-wrapper'>
            <span className='material-icons' onClick={onSwitch}>
                {icon}
            </span>
        </div>
    );
};

export default IconSwitch;
