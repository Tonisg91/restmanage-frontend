import React from 'react'
import { StyledGenericList } from '../styled-components/common-side'

function GenericTable({content}) {

    return (
        <StyledGenericList >
            {content}
        </StyledGenericList>
    )
}

export default GenericTable