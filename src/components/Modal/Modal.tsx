import React from 'react';
import { PokemonsContext } from '../../context/PokemonsContext';
import { PokemonDetails } from '../PokemonDetails/PokemonDetails';
import './Modal.css';
import cn from 'classnames';

export const Modal: React.FC = () => {
    const { showSidebar, setShowSidebar } = React.useContext(PokemonsContext);

    return (
        <div
            className={cn(
                'modal-styled',
                { 'modal-styled--open': showSidebar },
            )}
            onClick={() => setShowSidebar(false)}
        >

            <div
                className={cn(
                    'modal-styled__content',
                    { 'active': showSidebar },
                )}
                onClick={e => e.stopPropagation()}
            >
                <div className="modal__inner">
                    <button className="modal__button button is-link mb-4" onClick={() => setShowSidebar(false)}>X</button>
                    <PokemonDetails />
                </div>
            </div>
        </div>
    )
}