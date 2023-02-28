import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFruits } from '../../../api/fruit.api';
import FruitsList from '../../../components/fruits-list/fruits-list';

const FruitsIndexPage = () =>  {

    const fruits = fetchFruits();
    const navigate = useNavigate();

    const handleSelectedFruit = useCallback((id) => {
        navigate('/fruits/' + id);
    });

    return (
        <>
            <h2>La liste des fruits</h2>
            <FruitsList data={fruits} onSelectedFruit={handleSelectedFruit} />
        </>
    )
}

export default FruitsIndexPage;