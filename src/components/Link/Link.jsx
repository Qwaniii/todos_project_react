import React from 'react'

export default function Link({ name, make }) {

    const func = () => {
        make()
    }

  return (
    <div onClick={() => func()} className="btn_link">{name}</div>
  )
}
