import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="landing-page">      
      <div className="section white-background">
        <div className="tit">
        <h1>Vitimas do</h1>
        <h1>FEMINICIDIO</h1>
        <p>Veja fatos oficiais sobre feminicidio entre 2015 a 2022</p>
        </div>
      </div>

      <div className="section red-background">
        <h2>Delegacia mais perigosa</h2>
        <div>
        <p>Entre 2015 e 2022, a delegacia com maior número de casos foi a DP 047 do Capão Redondo, com 15 registros de feminicidio</p>
        <p>E no top 10 de delegaciais com mais registros, todas são de bairros de alta renda, mostrando que em bairros mais ricos as pessoas tem mais coragem de denunciar esses casos</p>
        </div>
      </div>
      <div className="section white-background">
        <h2>Municipio mais perigoso</h2>
        <p>Entre 2015 e 2022, o Municipio com maior número de casos foi o Municipio de São-Paulo, com 6 registros de feminicidio</p>
        <p>Dentre o top 5 dos municipios mais perigosos, todos são lugares com enorme quantidade populacional</p>
      </div>
      <div className="section red-background">
        <h2>Ano com mais casos</h2>
        <p>Entre 2015 e 2022, o ano com maior número de caso foi em 2022, com 195 registros</p>
        <p>Enquanto o ano com menos vitimas foi em 2015, mostrando uma piora ao longo dos anos</p>
      </div>
      <div className="section white-background">
        <h2>Idade das vitimas</h2>
        <p>Entre 2015 e 2022, a maior parte das vitimas tinham 31 anos de idade, com 40 registros</p>
        <p>Nos top 6 idades com mais vitimas, todas estão perto da casa dos 30 (de 27 - 35 anos)</p>
      </div>
      <div className="section red-background">
        <h2>Profissão das vitimas</h2>
        <p>Entre 2015 e 2022, 375 vitimas não tem emprego ou não possuem uma renda fixa</p>
        <p>Enquanto as outras 2 maiores profissões, preferiram não informar ou são empregos de "baixa classe" </p>
      </div>
    </div>
  )
}

export default App
