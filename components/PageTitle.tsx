import {PulsingText} from "$c/PulsingText";
import {Heading} from "$c/typography/Heading";

export function PageTitle({children}: FCP) {
    return (
        <Heading level={1}>
            <PulsingText>
                <span>&#123;&nbsp;</span>
                {children}
                <span>&nbsp;&#125;</span>
            </PulsingText>
        </Heading>
    )
}