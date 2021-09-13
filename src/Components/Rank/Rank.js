import React from 'react';

const Rank = ({name , entries}) => {
	return(
         <div>
             <div className='white f3'>
                {`${name}, your current entry count is...`}
              </div>
              <div className='white f1'>
                {entries}
              </div>
             <div>
                 <p className='f3 '>
                     {'This magic brain will detect faces in your image.Give it a try!'}
                 </p>
             </div>
         </div>
	);
}

export default Rank;