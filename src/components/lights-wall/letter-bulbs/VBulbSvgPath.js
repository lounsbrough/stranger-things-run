import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const VBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M104.402 77.737c-.031-1.06.459-1.225 1.09-1.243.632-.019 1.166.117 1.196 1.177.031 1.061-.453 2.646-1.085 2.664-.631.019-1.17-1.537-1.201-2.598z"
            hexColor="#f13478"
            on={on}
        />
    )
};

export default VBulbSvgPath
