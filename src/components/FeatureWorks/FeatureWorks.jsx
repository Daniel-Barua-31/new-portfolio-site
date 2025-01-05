import { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './FeatureWorks.css'
import Heading from '../Headling/Heading';

const FeatureWorks = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`works.json`)
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])

    console.log(data);


 
    return (
        <div id='work'>
            <div className='works-section'>
                <Heading titleName="Some Things I’ve Built" />
                <div className='feature-works-container'>
                    {
                        data.map((project)=> <Work key={data.id} project={project} />)
                    }
                </div>
                <div className='other=works'>

                </div>
            </div>
        </div>
    );
};

export default FeatureWorks;