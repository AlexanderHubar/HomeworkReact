import React from 'react';
import ProjectCarouselItem from '../projectCarousel/projectCarouselItem';

const CarouselData = [
    {
        sliderImg: 'images/project-slider-img.png',
        alt: 'Slider',
        link: 'industry.html',
        title: 'Project Heading',
        text: 'Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.'
    },
    {
        sliderImg: 'images/banner.png',
        alt: 'Slider',
        link: 'industry.html',
        title: 'Project Heading',
        text: 'Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.'
    },
    {
        sliderImg: 'images/project-slider-img.png',
        alt: 'Slider',
        link: 'industry.html',
        title: 'Project Heading',
        text: 'Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.'
    }
];

class projectCarousel extends React.Component {
    componentDidMount () {
        const $ = window.$;
        $('#projectCarousel').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            infinite: true
        });
    }
    render () {
        return (
            <div id="projectCarousel" className="project-carousel col-lg-8 card-slider card border-0">
                {
                    CarouselData.map((element, index) => {
                        return (
                            <ProjectCarouselItem
                                sliderImg={element.sliderImg}
                                alt={element.alt}
                                link={element.link}
                                title={element.title}
                                text={element.text}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default projectCarousel;