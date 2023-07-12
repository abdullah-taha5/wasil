import React from 'react'

function Breadcrumb({children}) {
  return (
    <ol className="breadcrumb bg-light mb-4">
        {children}
    </ol>
  )
}

export default Breadcrumb