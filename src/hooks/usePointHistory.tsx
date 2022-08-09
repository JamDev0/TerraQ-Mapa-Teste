import { createContext, ReactNode, useContext, useState } from "react";

interface pointHistoryContext {
    pointId: number | null
    setPointId: (arg: number | null) => void
}

interface PointHistoryProviderProps {
    children: ReactNode
}

const pointHistoryContext = createContext<pointHistoryContext>({} as pointHistoryContext)

export function PointHistoryProvider({ children }: PointHistoryProviderProps) {
    const [pointId, setPointId] = useState<number | null>(null) // Definição do estado responsável por dizer se o modal de histórico devera ser aberto e quais informações ele devera mostrar

    return(
        <pointHistoryContext.Provider value={{ pointId, setPointId }}>
            {children}
        </pointHistoryContext.Provider>
    )
}

export function usePointHistory() {
    const context = useContext(pointHistoryContext)

    return context
}