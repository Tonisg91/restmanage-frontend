import React from 'react'
import { StyledGenericList } from '../styled-components/common-side'

function GenericTable({content, id}) {

    return (
        <StyledGenericList id={id}>
            {content}
        </StyledGenericList>
    )
}

export default GenericTable