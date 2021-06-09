import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const PBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M148.113 41.384c-.167-1.048.298-1.275.921-1.374.624-.1 1.171-.034 1.338 1.014.167 1.048-.109 2.682-.732 2.781-.624.1-1.36-1.373-1.527-2.421z"
            hexColor="#86dcf8"
            on={on}
        />
    )
};

export default PBulbSvgPath
