import React, { Children } from 'react'

function Container({children}) {
    
  return (
    <div>
    <div>Container Çalıştı</div>
    {children}
    </div>
    
  )
}

export default Container