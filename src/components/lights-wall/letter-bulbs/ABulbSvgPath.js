import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const ABulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M42.058 8.634c-.112-1.055.364-1.257.992-1.323.628-.067 1.17.027 1.283 1.082.112 1.055-.25 2.673-.878 2.74-.628.066-1.285-1.443-1.397-2.499z"
            hexColor="#ffd869"
            on={on}
        />
    )
};

export default ABulbSvgPath
