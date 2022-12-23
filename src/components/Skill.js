import React from 'react';

function Skill(props) {
  return (
   <div className="text-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2 col-xxl-1">
    <div className='card'>
        <div className='display-2 mt-3'>{props.skill.icon}</div>
        <p>{props.skill.name}</p>
    </div>
    </div>

  );
}

export default Skill;