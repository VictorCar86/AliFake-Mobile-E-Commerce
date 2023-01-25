import React from 'react';
import InfoModal from '../containers/InfoModal';
import { Markup } from 'interweave';

const ProductDescriptionModal = ({ productData, state, toggle }) => {
    return (
        <InfoModal title="Description" state={state} toggle={toggle} >
            <React.Fragment>
                <Markup content={productData.shortDescription} />
            </React.Fragment>
        </InfoModal>
    )
}

export default ProductDescriptionModal