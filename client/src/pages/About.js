import React from 'react';

import SideHeader from "../components/sideHeader/index";
import HeaderTwo from "../components/Header/index";

import {Container } from 'react-bootstrap'
const HomeBlog = () => {
    return (
        <div className={'main-wrapper has-side-header'}>
        <HeaderTwo/>
        <SideHeader mobile={false}/>
        <div className="content-body section custom-scroll">
        <div className="section-wrap section pb-100"></div>
          <Container mb={5}>
 
   
               

                          <h3 className="block-title">Angus Grenfell</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <ul className="personal-info">
                                <li><span>email: a.grenfell@racing.com</span></li>
                                <li><span>facebook: angus.grenfell </span></li>
                                <li><span>instagram: angus.grenfell </span></li>
                            </ul>

    
                  </Container>
                     </div>
                     </div>  
 
  
    );
};

export default HomeBlog;
