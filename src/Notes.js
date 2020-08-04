import React from 'react'
import Note from './Note';
export default function Notes(...props) {

    return (
        <div className="notes">
            { 
        props.info.map(note => (
            <Note text={note}/>
            ))
      }
        </div>
    )
}
