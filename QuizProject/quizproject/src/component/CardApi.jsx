import React from 'react'
import './CardApi.css'

const CardApi = ({ api }) => {

    const renderDetail = (text, field) => {
   
    return <p>{text} : <span className='adition'>{api[field]}</span> </p>
    }
  

    return (
        <div className='foto'>
            <img className='image' src={api['img']}  alt='foto' />
            <div className='discr'>
                {renderDetail('Name', 'name')}
                {renderDetail('Nickname', 'nickname')}
                {renderDetail('Profession', 'occupation')}
                {renderDetail('Status', 'status')}
            </div>
        </div>
    )
}

export default CardApi