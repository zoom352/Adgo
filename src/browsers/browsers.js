import { useState } from "react"
import PostService from "../Api/PostService"



const Browsers = ({setAllBrowsers, }) => {

    
    // const getPageArray = () => {
    // let result = []
    //   for(let i = 0; i < browsers; i++){
    //       result.push(i + 1)
    //   }
    // }



    async function ChangeBrowserMobile() {
        const response = await PostService.getBrowserChromeMobile(5)
        setAllBrowsers(response.data.rows)
      }
    
      async function ChangeBrowserMobileFirefox() {
        const response = await PostService.getBrowserChromeMobile(5)
        setAllBrowsers(response.data.rows)
      }
    
      async function ChangeBrowserChrome() {
        const response = await PostService.getBrowserChromeMobile(5, 1)
        setAllBrowsers(response.data.rows)
      }


      function funcBrowsers(){
        // SetBrowsers(e.target.value)
        if(document.getElementById('selectid').value == "Chrome"){
          ChangeBrowserChrome()
        } else if (document.getElementById('selectid').value == "Firefox"){
          ChangeBrowserMobileFirefox()
        } else if (document.getElementById('selectid').value == "Mobile"){
          ChangeBrowserMobile()
        } 
    }
    

    async function ChangeTest() {
        const response = await PostService.getBrowserChromeMobile(1, 1)
        setAllBrowsers(response.data.rows)
      }

    function funcTest() {
        if(document.getElementById('qwer').value == "test"){
            ChangeTest()
          }
    }

    return <div>
        <select onChange={funcBrowsers} id="selectid">
          <option>all</option>
          <option value='Chrome'>Chrome</option>
          <option value='Firefox'>Firefox</option>
          <option value='UCbrowser'>UC browser</option>
          <option value='Opera'>Opera</option>
          <option value='Mobile'>Mobile</option>
          <option value='ChromeWebview'>Chrome Webview</option>
          <option value='Androidbrowser'>Android browser</option>
          <option value='UCbrowsermobile'>UC browser mobile</option>
          <option value='Opera Mini'>Opera Mini</option>
        </select>
        <select onChange={funcTest} id="qwer">
            <option>2</option>
            <option value='test'>test</option>
        </select>
    </div>
}

export default Browsers;