import './Button.css';

const Button = (props) => {
    return (
        <div className='btn'>
            <p>Image here</p>
            <span>{props.choice}</span>
        </div>
    )
};

export default Button;