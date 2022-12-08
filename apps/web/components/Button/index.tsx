import * as React from 'react';

interface Props {
    PlaceHolder: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    evt?: any;
    Disable?: boolean;
}

// p-2 border-2 border-black Border Style

// Button to change ...
export default function Button(props: Props) {
    return (
        <>
            <button
                disabled={props.Disable}
                onClick={props.evt}
                type="button"
                className="m-1 rounded-lg border-2 p-1 "
            >
                <h5>{props.PlaceHolder}</h5>
            </button>
        </>
    );
}
