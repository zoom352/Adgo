
import { Table } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import PostService from './Api/PostService.js';
import './App.css';
import 'antd/dist/antd.css';
import Browsers from './browsers/browsers.js';

function App() {

  const [allBrowsers, setAllBrowsers] = useState([])
  const [browsers, SetBrowsers] = useState(9)
  const [operatingSystems, setOperatingSystems] = useState(9)

  useEffect(() => {
    async function fetchData() {
      const response = await PostService.getAll()
      setAllBrowsers(response.data.rows)
    }
    fetchData()
  }, [])


  const columns = [
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'key'
    },
    {
      title: 'Impressions',
      dataIndex: 'impressions',
      key: 'key'
    },
    {
      title: 'Money',
      dataIndex: 'money',
      key: 'key'
    }
  ]


  async function ChangeWindows() {
    const response = await PostService.getWindows()
    setAllBrowsers(response.data.rows)
  }
  
  async function ChangePlatform() {
    const response = await PostService.getPlatform('platforms')
    setAllBrowsers(response.data.rows)
  }

  

  function funcOperation(){
    if(document.getElementById('selectid1').value == "Windows"){
      ChangeWindows()
    } else if (document.getElementById('selectid1').value == "MacOS"){
      ChangePlatform()
    }
  }


  return (
    <div>
      <div className='Group'>
        <p>Group by</p>
        <Browsers setAllBrowsers={setAllBrowsers}/>
        
      </div>
      <div className='platform'>
        <p>platform</p>
        <select onChange={funcOperation} id="selectid1">
          <option>1</option>
          <option value='Windows'>Windows</option>
          <option value='MacOS'>Mac OS</option>
          <option value='Linux'>Linux</option>
          <option value='Android'>Android</option>
          <option value='IOS'>IOS</option>
        </select>
      </div>
      <Table
        dataSource={allBrowsers}
        columns={columns}></Table>
    </div>
  );
}

export default App;
