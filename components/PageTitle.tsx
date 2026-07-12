import {PulsingText} from "$c/PulsingText";

export function PageTitle({children}: FCP) {
    return (
        <h1>
            <PulsingText>
                <span>&#123;&nbsp;</span>
                {children}
                <span>&nbsp;&#125;</span>
            </PulsingText>
        </h1>
    )
}