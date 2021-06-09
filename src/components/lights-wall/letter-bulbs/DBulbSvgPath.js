import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const DBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M99.493 14.274c.218-1.039.733-1.084 1.351-.954.618.13 1.106.386.888 1.424-.218 1.039-1.06 2.467-1.678 2.337-.618-.13-.78-1.768-.561-2.807z"
            hexColor="#00ff6b"
            on={on}
        />
    )
};

export default DBulbSvgPath
