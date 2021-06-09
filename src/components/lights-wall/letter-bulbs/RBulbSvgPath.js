import * as React from "react"
import BaseBulbSvgPath from "./BaseBulbPath";

const RBulbSvgPath = ({on}) => {
    return (
        <BaseBulbSvgPath
            coordinates="M30.793 68.361c.332-1.007.849-.995 1.449-.797.6.197 1.056.506.723 1.514-.332 1.008-1.328 2.333-1.928 2.135-.6-.197-.577-1.844-.244-2.852z"
            hexColor="#9ae1f9"
            on={on}
        />
    )
};

export default RBulbSvgPath
