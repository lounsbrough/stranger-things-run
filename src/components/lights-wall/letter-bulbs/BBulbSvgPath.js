import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const BBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M60.957 10.227c-.583-.887-.252-1.284.276-1.63.528-.348 1.054-.513 1.636.375.583.887 1.002 2.49.473 2.837-.528.347-1.803-.695-2.385-1.582z"
            hexColor="#000897"
            on={on}
        />
    )
};

export default BBulbSvgPath
