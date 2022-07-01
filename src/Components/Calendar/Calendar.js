import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import './Calendar.css'
function Calendar({selected,setSelected}) {

    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

  return (
    <div className='w-full flex justify-center'>
     <DayPicker
    mode="single"
    selected={selected}
    onSelect={setSelected}
    footer={footer}
  />
   </div>
  )
}

export default Calendar