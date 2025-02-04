import React, { useState } from "react";

interface Props {
    name: string;
    age: number;
    isAdmin: boolean;
}

export const Person = (props: Props) => {

    const [showInfo, setshowInfo] = useState<boolean | number>(false);
    const [biodata, setbiodata] = useState<string>("")

    const onCickShowInfo = () => {
        setshowInfo((prev) => !prev)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setbiodata(event.target.value)
    }

    return (
        <div className="flex gap-4">
            {showInfo && (
                <div>

                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>isAdmin: {props.isAdmin ? "true" : "false"}</p>
                    <p>Bio: {biodata}</p>
                </div>
            )}
            <button onClick={onCickShowInfo}>Show info</button>
            <input className="bg-white text-black" type="text" value={biodata} onChange={handleChange} />
        </div>
    )
}