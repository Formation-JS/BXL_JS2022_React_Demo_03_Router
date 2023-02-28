
const FruitsDetail = ({ name, desc, origin, image }) => (
    <div>
        <p>
            {name} {origin && (
                <span>(Origine : {origin})</span>
            )}
        </p>
        <img src={image} alt={`Image de ${name}`} />
        <p>{desc}</p>
    </div>
);

export default FruitsDetail;