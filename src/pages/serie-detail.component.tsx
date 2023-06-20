import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSeasonEpisodes, getSerieById } from "../services/movies";
import Loading from "../components/loading.component";
import SerieDetailBanner from "../components/serie-detail-banner.component";
import { useSerieDetailContext } from "../contexts/serie-detail.context";
import { Season } from "../core/models/SerieDetail";
import { Episode, Episodes } from "../core/models/Episodes";
import Image from "../components/image.component";
import { useModalContext } from "../contexts/modal.context";
import Modal from "../components/modal.component";


const SerieDetailPage: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingEpisodes, setIsLoadingEpisodes] = useState<boolean>(false);
    const [selectedSeasonNumber, setSelectedSeasonNumber] = useState<number | null>(null);
    const [episodes, setEpisodes] = useState<Episodes | null>(null);

    const [searchParams] = useSearchParams();

    const { selectedSerie, setSelectedSerie } = useSerieDetailContext();
    const { showModal, setShowModal } = useModalContext();

    useEffect(() => {
        const serieId = searchParams.get('serieId');
        getSerieDetail(Number(serieId));
    }, [searchParams]);

    useEffect(() => {
        if (selectedSeasonNumber && selectedSerie) {
            getEpisodes(selectedSerie.id, selectedSeasonNumber);
        }
    }, [selectedSeasonNumber]);

    const getSerieDetail = async (serieId: number) => {
        setIsLoading(true);
        const result = await getSerieById(Number(serieId));
        setSelectedSerie(result);
        if (!selectedSeasonNumber) setSelectedSeasonNumber(result.seasons[0].season_number);
        setIsLoading(false);
    };

    const getEpisodes = async (showId: number, selectedSeasonId: number, ) => {
        setIsLoadingEpisodes(true);
        const episodes = await getSeasonEpisodes(showId, selectedSeasonId);
        console.log(episodes, 'episodes');
        setEpisodes(episodes);
        setIsLoadingEpisodes(false);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="container py-3">
            <SerieDetailBanner />
            <div className="pr-6">
                <hr className="h-px my-8 bg-gray-400 border-0" />
            </div>
            <div className="flex gap-2 flex-wrap">
                {
                    selectedSerie?.seasons.map((season: Season) => {
                        return (
                            <button key={season.season_number} onClick={() => setSelectedSeasonNumber(season.season_number)}
                                disabled={season.season_number == selectedSeasonNumber}
                                className={ season.season_number == selectedSeasonNumber ?
                                    "bg-blue-500 font-semibold text-white py-2 px-4 border border-transparent rounded"
                                    :
                                    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}>
                                {season.name}
                            </button>
                        );
                    })
                }
            </div>
            <div className="grid grid-cols-12 gap-3 py-5 pr-6">
                {
                    episodes?.episodes.map((episode: Episode) => {
                        return (
                            <div className="col-span-3 pb-3 cursor-pointer" onClick={() => setShowModal(!showModal)}>
                                <Modal> </Modal>
                                <Image classes="max-h-[150px] min-h-[150px] rounded-2xl w-full object-cover" 
                                    alt={episode.name} 
                                    src={episode.still_path ? `https://image.tmdb.org/t/p/w500/${episode.still_path}` : undefined} />
                                <p><b>{episode.name}</b></p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SerieDetailPage;