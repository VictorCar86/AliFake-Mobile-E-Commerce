import React from 'react';
import InfoModal from '../containers/InfoModal';
import { Markup } from 'interweave';

const ProductDetailsModal = ({ productData, state, toggle }) => {
    return (
        <InfoModal title="Product Details" state={state} toggle={toggle} >
            <React.Fragment>
                <Markup content={productData?.shortDescription} />
            </React.Fragment>
        </InfoModal>
    )
}

export default ProductDetailsModal