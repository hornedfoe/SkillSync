import react from 'react'

const Core = ()=>{
    const fetch = localStorage.getItem('userData');
    return(
        <div>{console.log(fetch)}</div>
    )
}

export default Core;