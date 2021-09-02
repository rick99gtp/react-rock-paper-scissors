import './WinnerMessage.css';

const WinnerMessage = props => {
    return (
        <div className='winner-message'>
            {props.winnerMessage}
        </div>
    )
};

export default WinnerMessage;