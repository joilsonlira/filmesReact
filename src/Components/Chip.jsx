import React from 'react'

export default Props =>(
    <div className="Chip">
        <div className="front">
            {/* <div className="chipHead"></div> */}
            <div className='cfrontContent'>
                {Props.img}
            </div>
            <div className='frontFooter'>
                {Props.number}
                {Props.name}
            </div>
        </div>
        <div className="back">
            <div className="backHeader">
                {Props.miniature}
                {Props.primaryType}
                {Props.secundaryType}
            </div>
            <div className="backContent">
                {Props.attack}
                {Props.defense}
                {Props.spAttack}
                {Props.spDefense}
            </div>
            <div className="backFooter">
                {Props.rank}
            </div>
        </div>
    </div>
)