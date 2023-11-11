import Slot from './Slot';
import './PropertyList.css'

function PropertyList({ properties }) {
    // console.log(properties);
    // const { id, name, rating, price } = properties;
    return (
        <div className='PropertyList'>
            {properties.map(property => {
                return <Slot
                    key={property.id}
                    {...property}
                />
            })}
            {/* {properties.map(property => {
                return <Slot
                    key={property.id}
                    name={property.name}
                    rating={property.rating}
                    price={property.price}
                />
            })} */}
            {/* This will also work fine littler shorter
            Without using return statement */}
            {/* {properties.map(property =>
                <Slot
                    key={property.id}
                    name={property.name}
                    rating={property.rating}
                    price={property.price}
                />
            )} */}
            {/* <Slot id={id} name={name} rating={rating} price={price} /> */}
        </div>
    );
}

export default PropertyList;