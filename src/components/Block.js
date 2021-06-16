import React from 'react'

export function Block({res}) {

    return (
        <section>
            <div className="block">
                <h2>{res.Name}</h2>
                <p>{res.CharCode}</p>
                <p>{res.Previous}</p>
            </div>
        </section>
    )
}