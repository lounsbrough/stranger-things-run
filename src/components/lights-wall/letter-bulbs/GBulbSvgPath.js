import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const GBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M150.58 20.316c-.798-.7-.585-1.171-.168-1.646.417-.475.88-.774 1.677-.073.798.7 1.628 2.134 1.212 2.609-.417.474-1.923-.19-2.721-.89z"
            hexColor="#ff0061"
            on={on}
        />
    )
};

export default GBulbSvgPath
