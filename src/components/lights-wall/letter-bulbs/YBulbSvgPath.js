import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const YBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M153.964 74.08c.042-1.06.542-1.191 1.173-1.166.631.024 1.155.196 1.113 1.256-.041 1.06-.632 2.609-1.264 2.584-.63-.025-1.063-1.613-1.022-2.674z"
            hexColor="#ee588e"
            on={on}
        />
    )
};

export default YBulbSvgPath
