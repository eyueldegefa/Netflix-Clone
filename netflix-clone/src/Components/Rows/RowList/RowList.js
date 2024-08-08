import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
      <Row 
         title="NETFLIX ORGINAL"
         requestUrl={requests.fetchNetflixOriginals}
         isLargeRow={true}
      />
      <Row title="Top Rated" requestUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" requestUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" requestUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" requestUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" requestUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" requestUrl={requests.fetchDocumentaries}/>
      <Row title="TV Shows" requestUrl={requests.fetchTvShow}/>
      <Row title="Trending" requestUrl={requests.fetchTrending}/>
    </>
  )
}

export default RowList