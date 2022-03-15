import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Pagination, Autoplay} from 'swiper';
import { ModalController } from '@ionic/angular';
import { SophieModalPage } from '../sophie-modal/sophie-modal.page';
import { DavidModalPage } from '../david-modal/david-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public swiperConfig: SwiperOptions = {
    autoplay: {delay: 0},
    speed: 2000,
  }

  public swiperConfig2: SwiperOptions = {
    centeredSlides: true,
    slidesPerView: 1.5,
    zoom: true,
    grabCursor: true,
    pagination: true
  }

  modalDataResponseSophie: any;
  modalDataResponseDavid: any;

  constructor(public modalCtrl: ModalController) {}
  async sophieModal() {
    const modal = await this.modalCtrl.create({
      component: SophieModalPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((modalDataResponseSophie) => {
      if (modalDataResponseSophie !== null) {
        this.modalDataResponseSophie = modalDataResponseSophie.data;
        console.log('Modal Sent Data : '+ modalDataResponseSophie.data);
      }
    });

    return await modal.present();
  }

  async davidModal() {
    const modal = await this.modalCtrl.create({
      component: DavidModalPage,
    });

    modal.onDidDismiss().then((modalDataResponseDavid) => {
      if (modalDataResponseDavid !== null) {
        this.modalDataResponseDavid = modalDataResponseDavid.data;
        console.log('Modal Sent Data : '+ modalDataResponseDavid.data);
      }
    });

    return await modal.present();
  }


  immigrants = [
    {
      "name": "ALBERT EINSTEIN",
      "country": "GERMANY",
      "about": "One of the most recognized and well-known scientists of the century. \
      His theories solved centuries-old-problems in physics and rocked even \
      non-physicists' view of the world. E= mc2",
      "photo": "./assets/albertEinstein.png"
    },
    {
      "name": "CHIEN-SHIUNG WU",
      "country": "CHINA",
      "about": "Chinese-American nuclear physicist Chien-Shiung Wu, also known as 'the First Lady of Physics,' contributed to the Manhattan Project and made history with an experiment that disproved the hypothetical law of conservation of parity.",
      "photo": "./assets/chien-shiungWu.png"
    },
    {
      "name": "NIKOLA TESLA",
      "country": "SERBIA",
      "about": "Futurist who illuminated the earth electrically bright due to his immense contributions in designing the very back-bone of every modern electric supply of today – the alternating current.",
      "photo": "./assets/nikolaTesla.png"
    },
    {
      "name": "CECILIA PAYNE",
      "country": "ENGLAND",
      "about": "Cecilia Payne discovered that stars are made largely of the two lightest chemical elements – hydrogen and helium. She was the most eminent female astronomer of her time, the first to be appointed full professor at Harvard University, and the first to chair a department.",
      "photo": "./assets/ceciliaPayne.png"
    },
    {
      "name": "BOB MARLEY",
      "country": "JAMAICA",
      "about": "Considered one of the pioneers of reggae music. Bob was a freedom fighter he used his Pen instead of gun. He fought for freedom, peace, and equal rights. Marley received The United Nations Peace Medal. Marley’s “One Love” was proclaimed as Song of the Millennium.",
      "photo": "./assets/bobMarley.png"
    },
    {
      "name": "GERTY CORI",
      "country": "CZECH",
      "about": "Carbohydrate research not only led to the development of treatments for diabetes, it also made them winners of the 1947 Nobel Prize in physiology or medicine, and Gerty the first American woman Nobel laureate in science.",
      "photo": "./assets/gertyCori.png"
    },
    {
      "name": "JOSEPH PULITZER",
      "country": "HUNGARY",
      "about": "Best known for the Pulitzer Prizes, which were established in 1917. He was American newspaper editor and publisher who helped to establish the pattern of the modern newspaper. In his time he was one of the most powerful journalists in the United States.",
      "photo": "./assets/josephPulitzer.png"
    },
    {
      "name": "MARIA MAYNER",
      "country": "GERMANY",
      "about": "German-born American theoretical physicist, and Nobel laureate in Physics for proposing the nuclear shell model of the atomic nucleus. She was the second woman to win a Nobel Prize in physics, the first being Marie Curie.",
      "photo": "./assets/mariaMayner.png"
    },
    {
      "name": "HEDY LAMARR",
      "country": "AUSTRIA",
      "about": "Frequency hopping a way of jumping around on radio frequencies in order to avoid a third party jamming your signal. Avid inventor and the person behind advances advances in communication technology that led to today’s Wi-Fi, GPS, and Bluetooth.",
      "photo": "./assets/hedyLamarr.png"
    },
  ]

  companies = [
    {
      "name": "Alcorn",
      "icon": "./assets/Alcorn.png",
    },
    {
      "name": "Pranos",
      "icon": "./assets/pranos.png",
    },
    {
      "name": "Finberg",
      "icon": "./assets/finberg.png",
    },
    {
      "name": "Fyusion",
      "icon": "./assets/fyusion.png",
    },
    {
      "name": "Welcoming America",
      "icon": "./assets/welcoming_amrica.png",
    },
  ]

  ngOnInit() {
    Swiper.use([Autoplay]);
    Swiper.use([Pagination]);
  }
}

