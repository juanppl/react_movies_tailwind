import { ReactNode, createContext, useContext, useState } from "react";
import { SerieDetail } from "../core/models/SerieDetail";

type ContextProps = {
    selectedSerie: SerieDetail | null,
    setSelectedSerie: Function,
}

export const SerieDetailContext = createContext<ContextProps>({
    selectedSerie: null,
    setSelectedSerie: () => null
});

type ProviderProps = {
    children: ReactNode
}

export const SerieDetailProvider = ({ children }: ProviderProps) => {
    const [selectedSerie, setSelectedSerie] = useState<SerieDetail | null>(null);
    const value = { selectedSerie, setSelectedSerie };
    return (
        <SerieDetailContext.Provider value={value}>
            { children }
        </SerieDetailContext.Provider>
    );
}

export const useSerieDetailContext = (): ContextProps => {
    const context = useContext(SerieDetailContext);

    if (context === undefined) {
        throw new Error('[SerieDetailContext] is undefined');
    }

    return context;
}
