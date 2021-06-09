import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const IBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M16.933 34.155c.14-1.053.65-1.137 1.276-1.054.626.082 1.132.301.993 1.353-.14 1.052-.87 2.54-1.497 2.457-.626-.083-.91-1.704-.771-2.756z"
            hexColor="#11e6f7"
            on={on}
        />
    )
};

export default IBulbSvgPath
