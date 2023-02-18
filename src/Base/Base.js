import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

function Base({title, description, children}) {
  return (
    <React.Fragment>
<div className='appsection'>
<ResponsiveAppBar />
</div>

    <div className='main-component'>
        <header>
          <h1>{title}</h1>
        </header>
        <main className='main-segment'>
            {description}
            
        </main>
        <main className='main-segment'>
            {children}
        </main>
    </div>
    </React.Fragment>
  )
}

export default Base