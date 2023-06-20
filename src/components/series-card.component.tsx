import { FC } from "react";
import { Serie } from "../core/models/Serie";
import { MdStarRate } from "react-icons/md";

type Props = {
    serie: Serie
}

const SeriesCard: FC<Props> = (props) => {
    const { serie } = props;
    return (
        <div className="max-w-sm h-full overflow-hidden shadow-lg rounded-xl">
            <img className="w-full max-h-[300px] object-cover rounded-xl" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="Sunset in the mountains" />
            <div className="px-6 py-4 flex justify-center align-middle flex-col">
                <div className="font-bold text-lg mb-2 text-center">{serie.original_name}</div>
                <div className="flex justify-center align-middle items-center gap-2">
                    <MdStarRate fill="#FFE234" />
                    <p className="text-gray-700 text-base text-center">{serie.vote_average}</p>
                </div>
            </div>
        </div>
    );
}

export default SeriesCard;