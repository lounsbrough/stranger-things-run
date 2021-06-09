import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const QBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M182.418 44.066c.121-1.054.63-1.147 1.257-1.075.628.072 1.137.282 1.016 1.336s-.827 2.554-1.454 2.482c-.628-.072-.94-1.689-.819-2.743z"
            hexColor="#f70f77"
            on={on}
        />
    )
};

export default QBulbSvgPath
