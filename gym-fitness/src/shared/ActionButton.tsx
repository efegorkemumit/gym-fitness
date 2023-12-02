import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from './types';

type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;


};

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="bg-secondary-500 rounded-lg py-2 px-10 hover:bg-primary-500 hover:text-white transition duration-300 hover:duration-500">

        {children}
    </AnchorLink>
  )
}

export default ActionButton