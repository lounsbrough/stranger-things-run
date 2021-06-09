import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const UBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M86.552 78.101c-.57-.895-.234-1.287.299-1.627.533-.34 1.06-.497 1.63.398.57.895.967 2.505.434 2.844-.532.34-1.793-.72-2.363-1.615z"
            hexColor="#236fee"
            on={on}
        />
    )
};

export default UBulbSvgPath
