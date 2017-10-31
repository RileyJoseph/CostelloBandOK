import $ from "jquery";
import 'slick-carousel';

export default function gallerySlide() {
    $('.slick-carousel').not('.slick-initialized').slick({
      autoplay: true,
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}