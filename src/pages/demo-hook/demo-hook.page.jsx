import { useCallback } from 'react';
import { useArray } from '../../hooks/array.hook';

const DemoHookPage = () => {

    const [messages, addMessage] = useArray('Balthy', 'Zaza');

    const handleAddElem = useCallback(() => {
        addMessage('Hello');
    });

    return (
        <>
            <h1>⚔ Demo Hook ⚔</h1>

            <button onClick={handleAddElem}>Ajouter</button>
            <ul>
                {messages.map(elem => (
                    <li key={elem.id}>{elem.data}</li>
                ))}
            </ul>
        </>
    )
}

export default DemoHookPage;