import type { SwiperBannerImages } from '@/types';

const banner1Lg = '/img/banner/home/banner1-lg.png';
const banner1Md = '/img/banner/home/banner1-md.png';
const banner2Lg = '/img/banner/home/banner2-lg.png';
const banner2Md = '/img/banner/home/banner2-md.png';
const banner3Lg = '/img/banner/home/banner3-lg.png';
const banner3Md = '/img/banner/home/banner3-md.png';

const swiperBannerImages: SwiperBannerImages[] = [
  {
    lg: banner1Lg,
    md: banner1Md,
    title: '「從零開始，開啟你的音樂之旅！」',
    content: '不論你是初學者還是進階樂手，我們提供最專業的音樂課程，讓你一步步實現夢想！',
  },
  {
    lg: banner2Lg,
    md: banner2Md,
    title: '「彈奏你的靈魂旋律！」',
    content: '學習鋼琴、吉他、小提琴等樂器，專業老師帶你掌握技巧，玩出屬於自己的音樂風格！',
  },
  {
    lg: banner3Lg,
    md: banner3Md,
    title: '「創作你的專屬音樂作品！」',
    content: '從作曲、編曲到混音，掌握完整音樂製作技能，讓你的音樂觸動更多人！',
  },
];
export default swiperBannerImages;
