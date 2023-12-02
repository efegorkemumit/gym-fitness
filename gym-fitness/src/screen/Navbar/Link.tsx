import React from 'react'
import {SelectedPage} from '../../shared/types'
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    page:string;
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void;


}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const loverCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink 
    className={`${SelectedPage == loverCasePage ? "text-primary-500": ""}`}
    href={`#${loverCasePage}`}
    onClick={()=>setSelectedPage(loverCasePage)}
    
    >
        {page}


    </AnchorLink>
  )
}

export default Link