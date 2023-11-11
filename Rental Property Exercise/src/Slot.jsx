import './Slot.css'

export default function Slot({ name, rating, price }) {
    return (
        <div className='Slot'>
            <h2>{name}</h2>
            <p>${price} / Night</p>
            <h3>{rating}⭐</h3>
        </div>
    );
}