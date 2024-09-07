import React from 'react'

export default function({ ContryName }) { 

  return (
    <div className="card">
      <img src={ContryName.flags.svg} alt="" />
      <h2> contry : {ContryName.translations.fra.common}</h2>
      <h3>Capital :{ContryName.capital}</h3>
      <h4> population :{(ContryName.population).toLocaleString('de-DE')}  </h4>
    </div>
  );
}
