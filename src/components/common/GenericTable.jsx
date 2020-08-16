import React from 'react'
import { StyledGenericTable } from '../styled-components/common-side'

function GenericTable(props) {
    return (
        <StyledGenericTable>
            {props.tr}
        </StyledGenericTable>
    )
}

export default GenericTable