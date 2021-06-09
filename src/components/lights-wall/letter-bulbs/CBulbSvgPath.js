import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const CBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M75.585 11.267c.14-1.052.649-1.136 1.275-1.053.627.083 1.132.301.993 1.354-.14 1.052-.872 2.539-1.498 2.456-.626-.083-.91-1.705-.77-2.757z"
            hexColor="#ab0165"
            on={on}
        />
    )
};

export default CBulbSvgPath
