import Axios from "../../core/axiosInstance"
import { Episodes } from "../../core/models/Episodes";
import { Page, Serie } from "../../core/models/Serie";
import { SerieDetail } from "../../core/models/SerieDetail";

export const getPopularSeries = async (page: number = 1): Promise<Page<Serie>> => {
    return await Axios.get('/3/tv/popular', {
        params: { page }
    }).then((response: any) => response.data);
}

export const getSerieById = async (id: number): Promise<SerieDetail> => {
    return await Axios.get(`/3/tv/${id}`)
        .then((response: any) => response.data);
}

export const getSeasonEpisodes = async (showId: number, seasonId: number): Promise<Episodes> => {
    return await Axios.get(`/3/tv/${showId}/season/${seasonId}`)
        .then((response: any) => response.data);
}
