import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'ECVII - IT313',
  description: 'Basic MERN E-Commerce App',
  keywords: 'mern, mondodb, express, react, node',
}

export default Meta
