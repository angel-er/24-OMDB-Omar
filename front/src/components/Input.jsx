import React from 'react'

export default props => {

    return (
        <div>
            <form onSubmit={props.onSubmit} >
                <input
                    type='text'
                    name='titulo'
                    placeholder='Movie Name'
                    onChange={props.onChange}
                />
                <button  type='submit' >Search</button>
            </form>
        </div>
    )
}
