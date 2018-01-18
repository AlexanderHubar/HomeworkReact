import React from 'react';
import ClientsImage from '../WelcomeCarouselImages';
import Blockquote from '../clientCarousel/blockqoute';

const Images = [
    {
        image: 'images/testimonials-client-1.png',
        alt: 'testimonials-client'
    },
    {
        image: 'images/testimonials-client-2.png',
        alt: 'testimonials-client'
    },
    {
        image: 'images/testimonials-client-3.png',
        alt: 'testimonials-client'
    }
];

const BlockquoteData = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.unchanged.",
        name: "Client Name",
        designation: "Designation"
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.unchanged.",
        name: "Client Name",
        designation: "Designation"
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specibook. It has survived not only five centuries, but also the leap into electronic typesetting.unchanged.",
        name: "Client Name",
        designation: "Designation"
    }
];

class clientCarousel extends React.Component {
    render () {
        return (
            <div>

                <div className="blockquote-thumb-nav">
                    {
                        Images.map((element, index) => {
                            return (
                                <ClientsImage image={element.image} alt={element.alt} key={index} />
                            )
                        })
                    }
                </div>

                <div className="blockquote-carousel">
                    {
                        BlockquoteData.map((element, index) => {
                            return (
                                <Blockquote text={element.text} name={element.name} designation={element.designation} key={index} />
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default clientCarousel;