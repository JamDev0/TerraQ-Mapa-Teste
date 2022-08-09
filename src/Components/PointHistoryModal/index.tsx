import { Dialog } from "@headlessui/react";

import { useEffect, useState } from "react";

import { DataTable, DialogContentBackdrop, DialogContentContainer, TableWrapper, Title, XBtn } from "./styles";

import { usePointHistory } from "../../hooks/usePointHistory";

interface datas {
    data: string
    temperatura: number
    umidade: number
    precipitacao: number
    visibilidade: number
    vento: number
}

export function PointHistoryModal() {
  const { pointId, setPointId } = usePointHistory()

  const [datas, setDatas] = useState<datas[]>([]) // Definição de um estado que armazenar todas as informações sobre o histórico do ponto atual

  function isModalOpen() {
    return pointId !== null
  }


  useEffect(() => {
    if(pointId !== null) {
      fetch(`https://terraq.com.br/api/teste-leaflet/ponto/${pointId}`)
      .then((res) => res.json())
      .then((d) => setDatas(d)) // Definição dos valores retornados pela api como valor do estado
    }
  }, [pointId])

  return(
    <Dialog style={{position: 'absolute', top: 0, zIndex: 2000, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} open={isModalOpen()} onClose={() => setPointId(null)}>
      
        <DialogContentContainer >
              <XBtn
                onClick={() => {
                  setPointId(null) // Definição do estado como nulo
                  setDatas([]) // Reinicialização do estado
                }}
              >
                X
              </XBtn>

              {
                datas.length > 0
                ? <>
                    <Title>
                      Histórico Ponto {pointId}
                    </Title>
                    <TableWrapper>
                      <DataTable>
                        <tr>
                          <th>datas</th>
                          <th>temperatura</th>
                          <th>umidade</th>
                          <th>precipitação</th>
                          <th>visibilidade</th>
                          <th>vento</th>
                        </tr>
                        {
                          datas.map(({ data, precipitacao, temperatura, umidade, vento, visibilidade }) => {
                            return (
                              <tr key={data}>
                                <td>{data}</td>
                                <td>{temperatura}</td>
                                <td>{umidade}</td>
                                <td>{precipitacao}</td>
                                <td>{visibilidade}</td>
                                <td>{vento}</td>
                              </tr>
                            )
                          })
                        }
                      </DataTable>
                    </TableWrapper>
                  </>
                : <span>loading...</span>
              }
            </DialogContentContainer>
      <DialogContentBackdrop />
    </Dialog>
  )
}