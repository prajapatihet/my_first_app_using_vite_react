import React from 'react'

export default function ListMap() {
    let names = ["Hello", "How", "You"];
    let nameList = names.map(name => (<h3>{name}</h3>))
    return (
        <div>
            <h3>{nameList}</h3>
        </div>
    )
}
