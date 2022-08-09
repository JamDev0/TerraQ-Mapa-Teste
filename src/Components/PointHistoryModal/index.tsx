import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { usePointHistory } from "../../hooks/usePointHistory";
import { DataTable, DialogContentBackdrop, DialogContentContainer, TableWrapper, Title, XBtn } from "./styles";

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

  const [datas, setDatas] = useState<datas[]>([])

  function isModalOpen() {
    return pointId !== null
  }

  useEffect(() => {
    if(pointId) {
      fetch(`https://terraq.com.br/api/teste-leaflet/ponto/${pointId}`)
      .then((res) => res.json())
      .then((d) => setDatas(d))
    }
  }, [pointId])

  return(
    <Dialog style={{position: 'absolute', top: 0, zIndex: 2000, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} open={isModalOpen()} onClose={() => setPointId(null)}>
      
        <DialogContentContainer >
              <XBtn
                onClick={() => {
                  setPointId(null)
                  setDatas([])
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
                          <th>preciptação</th>
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
        : <span>loading...</span>
      

      <DialogContentBackdrop />
    </Dialog>
  )
}