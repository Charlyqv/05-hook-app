import React from 'react';


export const Small = React.memo(({ value }) => {

  console.log(" I'm back ");

  return (
    <small>{ value }</small>
  )
})
