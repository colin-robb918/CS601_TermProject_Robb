import errorImg from '../images/error.jpg';

export default function NotFound() {
    return (
        <div className="error-page">
            <img className='error-image' src={errorImg} alt='404 Error' />
        </div>
    )
}