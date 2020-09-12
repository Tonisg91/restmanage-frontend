import React from 'react'
import { StyledLoadingPage } from '../styled-components/common-side'

function LoadingPage() {
    return (
        <StyledLoadingPage>
            <div>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading image" />
            </div>
        </StyledLoadingPage>
    )
}

export default LoadingPage
