import { Popover } from "@headlessui/react";
import { useEffect, useState } from "react";
import { PopoverButton, PopoverContainer, PopoverPanel, UserDataContainer } from "./styles";

interface userData {
  id: number
  email: string
  nome: string
  data_nascimento: string
  sexo: string
  telefone: string
  avatar: string
}

export function UserMenu() {
  const [userData, setUserData] = useState<userData | null>(null)

  useEffect(() => {
    fetch('https://terraq.com.br/api/teste-leaflet/user')
    .then((res) => res.json())
    .then((data) => {
      setUserData(data)
    })
  }, [])

  return(
    <PopoverContainer>
      <PopoverButton>
          Usuário
      </PopoverButton>
      <PopoverPanel>
          {
            userData
            ? <>
                <img src={userData.avatar} />
                <UserDataContainer>
                  <h2>
                    {userData.nome}
                  </h2>
                  <div>
                    <span>
                      Nasceu em: {userData.data_nascimento}
                    </span>
                    <span>
                      Sexo: {userData.sexo}
                    </span>
                    <span>
                      Email: {userData.email}
                    </span>
                    <span>
                      Telefone: {userData.telefone}
                    </span>
                  </div>
                </UserDataContainer>
              </>
            : <span>
                Loading...
              </span>
          }
      </PopoverPanel>
    </PopoverContainer>
  )
}