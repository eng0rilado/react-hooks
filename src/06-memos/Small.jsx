import { memo } from "react";

export const Small = memo(({ counter }) => {

    console.log("Pintando componente");
    return (
        <small> {counter} </small>
    )
})
