import React from 'react'

const Button = ({button, filter}) => {
  return (
    <div className='main__btnGrid'>
        {
            button.map((cat, i) => {
                return <button 
                          type="button" 
                          className='main__button' 
                          onClick={() => filter(cat)} 
                          key={i}
                        >
                          {cat}
                        </button>
            })
        }
    </div>
  )
}

export default Button