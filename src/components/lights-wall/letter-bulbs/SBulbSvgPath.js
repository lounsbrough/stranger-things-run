import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const SBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M49.207 74.68c-.112-1.056.364-1.258.992-1.324.628-.067 1.17.027 1.283 1.082.112 1.055-.25 2.673-.878 2.74-.628.066-1.285-1.443-1.397-2.499z"
            hexColor="#f4cd5c"
            on={on}
        />
    )
};

export default SBulbSvgPath
