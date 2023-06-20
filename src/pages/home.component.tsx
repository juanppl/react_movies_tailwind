import { FC, useState } from "react";

import { useEffect } from 'react';
import { getPopularSeries } from "../services/movies";
import { Serie } from "../core/models/Serie";
import SeriesCard from "../components/series-card.component";
import Loading from "../components/loading.component";
import { createSearchParams, useNavigate } from "react-router-dom";

const Home: FC = () => {

    const [series, setSeries] = useState<Serie[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        getPopularSeries(page)
            .then((response) => {
                setSeries((prevState) => {
                    if (!prevState) return response.results;
                    return [...prevState, ...response.results];
                });
                setIsLoading(false);
            });
    }, [page]);

    const loadMoreHandler = () => {
        setPage(page + 1 );
    }

    const handleRedirect = (id: number) => {
        navigate({
            pathname: 'serie-detail', 
            search: createSearchParams(new URLSearchParams({ serieId : `${id}` })).toString()
        });
    }

    return (
        <div className="max-w-[1000px] mx-auto py-4">
            <div className="px-5">
                <div className="grid grid-cols-12 gap-x-5 gap-y-10">
                    {
                        series && series.length > 0 && 
                        (
                            series.map((serie: Serie, index: number) => {
                                return (
                                    <div className="col-span-3 h-full hover:scale-105 transition-transform cursor-pointer" key={serie.id + index}>
                                        <a onClick={() => handleRedirect(serie.id)} >
                                            <SeriesCard serie={serie} />
                                        </a>
                                    </div>
                                );
                            })
                        )
                    }
                </div>
                <div className="py-5 flex justify-center">
                    {
                        isLoading ? <Loading /> :
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={loadMoreHandler}
                        >Load More</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;