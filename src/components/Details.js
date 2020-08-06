import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

//Components
import Loader from './UI/Loader';

const Details = (props) => {
    
    //State
    const [result, setResult] = useState({});
    const [proceso, setProceso] = useState(true);


    useEffect(() => {
        const ConsultarAPI = async () => {
            //Extracting "match" of props
            const { match } = props;
            console.log("1", match.params);

            const URL = `https://api.spacexdata.com/v4/${match.params.project}/${match.params.id}`;
            const response = await Axios.get(URL);
            setResult(response.data);

            setProceso(false);

        }

        if(proceso) {
            ConsultarAPI();
        }

    }, [proceso]);

    
    return (
        <Fragment>
            {
                !result 
                ? 
                    <Loader /> 
                :
                    null
            }
        </Fragment>
    );
}
 
export default Details;