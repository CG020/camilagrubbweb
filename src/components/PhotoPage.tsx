import NavBar from "./NavBar";
import { useEffect, useState } from 'react';
import Footer from "./Footer";

const PhotoPage = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.fadeInSection');
    
            sections.forEach(section => {
                const top = section.getBoundingClientRect().top;
                const bottom = section.getBoundingClientRect().bottom;
                const middle = top < window.innerHeight && bottom >= 0;
                if (middle) {
                    section.classList.add('isVisible');
                } else {
                    section.classList.remove('isVisible');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const photoList = [

    ]

    return(
        <div>
        <NavBar message={'photo gallery'} tabs={['travel', 'floral', 'artistic', 'home']}/>
        <p>
            - Photo Gallery - <br></br> <br></br>
        </p>
        <div className="container px-4 text-center">
            <div className="row gx-5">
                <div className="col">
                <div className="p-3">test</div>
                </div>
                <div className="col">
                <div className="p-3">test</div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default PhotoPage;