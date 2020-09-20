import Head from 'next/head'
import React from 'react'
import Header from '../../src/components/app/Header'
import Editor from '../../src/components/app/Editor';
import Sidebar from '../../src/components/app/Sidebar';
import SidebarMenu from '../../src/components/app/SidebarMenu';

export default function Template() {
  let pageTitle = "xxx"
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-VhBcF/php0Z/P5ZxlxaEx1GwqTQVIBu4G4giRWxTKOCjTxsPFETUDdVL5B6vYvOt" crossOrigin="anonymous"></link>
      </Head>
      <Header/>
      <div data-uk-grid>
        <div className='sidebar uk-width-medium uk-visible@m' data-uk-height-viewport="offset-top: true">
          <div className='sidebar-container uk-padding'>  
            <SidebarMenu />
          </div>
        </div>
        <div className='uk-width-expand'>
          <Editor />
        </div>
      </div>
      <Sidebar/>
    </>
  )
}