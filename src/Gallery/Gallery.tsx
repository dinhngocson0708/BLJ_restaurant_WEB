import React from 'react';
import "./gallery.css";
import { PrismicRichText, useAllPrismicDocumentsByType, usePrismicDocumentByUID } from '@prismicio/react';
import { PrismicImage } from '@prismicio/react';
import Container from "react-bootstrap/Container";
import Layout from "../Layout";
const Gallery = () => {
    const [documents] = useAllPrismicDocumentsByType('gallery');
    const [banerimg] = usePrismicDocumentByUID('menu', 'gallery');
    console.log('------------------->', documents);
  console.log('======================>',banerimg);
  
    return (
        <div>
              <Layout>
          <div className="imag_contact"><PrismicImage field={banerimg?.data.menucover} /></div>
          
          <h1 className="title_contactUs">Gallery</h1>
          <Container>
                <div >
                    {documents?.map((item) => (
                        <div className='gallery'>
                            <div><PrismicImage field={item.data.garden} width='100%' /></div>
                            <div>
                                <h2>Garden</h2><br></br>
                                <PrismicRichText field={item.data.desc_garden}   />
                             </div>

                             
                             <div>
                                <h2>Inside</h2><br></br>
                                <PrismicRichText field={item.data.desc_inside}   />
                             </div>
                             <div><PrismicImage field={item.data.inside} width='100%' /></div>



                                <div><PrismicImage field={item.data.kitchen} width='100%' /></div>
                                <div><PrismicImage field={item.data.view} width='100%' /></div>
                                <div>
                                <h2>Kitchen</h2><br></br>
                                <PrismicRichText field={item.data.desc_kitchen}   />
                                </div>
                                <div>
                                <h2>View </h2><br></br>
                                <PrismicRichText field={item.data.desc_view}   />
                             </div>
                             
                        </div>
                     
                    ))}
                </div>
          </Container>
          <br />
        </Layout>
        </div>
    );
    }


export default Gallery;