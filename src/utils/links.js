import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const links = [
    {
      url: "/",
      text: "Home",
      icon: <AiFillHome className="nav-icon" />,
    },
    {
      url: "/test",
      text: "Test",
      icon: <RiTeamFill className="nav-icon" />,
    },
    {
      url: "/contattaci",
      text: "contattaci",
      icon: <AiFillMessage className="nav-icon" />,
    },
  ];
  const LinkComponent = ({ classLink }) => {
    const { closeSidebar } = useGlobalContext();
  
/* <ul className="list-unstyled">
             <li><a href="#" className="text-white">Follow on Twitter</a></li>
             <li><a href="#" className="text-white">Like on Facebook</a></li>
             <li><a href="#" className="text-white">Email me</a></li>
           </ul> */

    return (
      <ul className={classLink}>
        {links.map((link) => {
          return (
            // <li key={link.text}> <a href={link.url}  className="text-white" onClick={closeSidebar}>{link.text}</a></li>
            <li key={link.text}>
            <Link className="text-white" 
            key={link.text}
            to={link.url}>
            {link.text} 
          </Link>
          </li>
          );
        })}
      </ul>
    );
  };
  export { LinkComponent };