import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const XBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M135.135 73.832c-.343-1.005.076-1.307.674-1.512.598-.204 1.148-.233 1.491.771.344 1.004.35 2.662-.247 2.866-.598.205-1.574-1.121-1.918-2.125z"
            hexColor="#e5aa0e"
            on={on}
        />
    )
};

export default XBulbSvgPath
