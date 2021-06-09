import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const KBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M62.266 46.341c-.318-1.012.108-1.304.711-1.493.603-.19 1.154-.205 1.471.808.318 1.013.283 2.67-.32 2.859-.602.19-1.544-1.161-1.862-2.174z"
            hexColor="#1263e9"
            on={on}
        />
    )
};

export default KBulbSvgPath
