import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Joke = ({joke, loading, getNewJoke}) => {
    return(
        <div className="joke">
            {loading ? <Skeleton circle={true} width={70} height={70} /> : <img src={joke.icon_url} width="60px" height="60px" />}
            <h1>{loading ? <Skeleton count={3} /> : joke.value}</h1>

            <button onClick={getNewJoke}>get</button>

            <h3>it is made in a react skeleton</h3>
        </div>
    )
}

export default Joke