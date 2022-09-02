import React from 'react'
import { useParams } from "react-router-dom";
import PlaceJson from '../data/json.json'
import Header from '../components/Header'
import { Fragment } from 'react';

export default function MoreDetail() {
  const { id } = useParams();
  const item=PlaceJson.filter(n=>n.id==id).map(n=>n.id)
  return (
    <Fragment>
      <Header />
    <div>{item}</div>
    </Fragment>
  )
}
