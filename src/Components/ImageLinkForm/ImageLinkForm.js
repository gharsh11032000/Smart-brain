import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
	return(
             <div className='center'>
                 <div id='searchbar' className=' center form pa4 br3 shadow-5 ' >
                     <input className='f4 pa2 w-70  center' type='text' onChange={onInputChange}/>
                     <button className='w-30 grow link f4 dib ph3 pv2 white bg-light-purple' onClick={onButtonSubmit}>
                         Detect
                     </button>
                 </div>
             </div>
	);
}

export default ImageLinkForm;