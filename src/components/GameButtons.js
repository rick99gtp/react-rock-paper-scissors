import './GameButtons.css';
import Button from './Button';

const GameButtons = () => {
    return (
        <div className='game-buttons'>
            <Button choice={'Rock'} />
            <Button choice={'Paper'} />
            <Button choice={'Scissors'} />
        </div>
    )
};

export default GameButtons;