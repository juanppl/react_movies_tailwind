import { FC } from "react";
import { useSerieDetailContext } from "../contexts/serie-detail.context";


const SerieDetailBanner: FC = () => {

    const { selectedSerie }  = useSerieDetailContext();

    return (
        selectedSerie &&
        <div className="grid grid-cols-12">
            <div className="col-span-4 flex justify-center">
                <img className="max-h-[300px] rounded-2xl" alt={selectedSerie.name} src={`https://image.tmdb.org/t/p/w500/${selectedSerie.poster_path}`} />
            </div>
            <div className="col-span-7">
                <div className="flex flex-col h-full justify-around">
                    <h3 className="text-3xl font-bold">{selectedSerie.name}</h3>
                    <p>{selectedSerie.overview}</p>
                    <p><b>Genres:</b> {selectedSerie.genres.map(g => g.name).join(', ')}</p>
                    <p><b>Platforms:</b> {selectedSerie.networks.map(g => g.name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
}

export default SerieDetailBanner;