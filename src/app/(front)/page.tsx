import SwipperBanner from '@/components/SwipperBanner';
import swiperBannerImages from '@/data/swiperBannerImages';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <SwipperBanner swiperBannerImages={swiperBannerImages} />
      <section className="container py-20">
        <h1 className="text-h1 text-gray-4 mb-4 text-center">三大主題課程</h1>
        <p className="text-textBody1 mb-12 text-center">
          我們提供從作曲、編曲、錄音到混音的全方位課程，幫助你將靈感轉化為動人的旋律，打造屬於你的音樂風格。
          <br />
          立即探索我們的課程，讓你的音樂夢想起飛！
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl p-8 shadow-lg d-flex flex-col gap-4 text-center border-4 border-gray-4">
            <h3 className="text-h3 text-gray-4 mb-2">樂器演奏</h3>
            <p className="text-gray-2">親手演奏，感受音樂的魅力</p>
            <p className="text-gray-3 my-4">
              想學習彈奏自己喜愛的歌曲？我們提供鋼琴、吉他、小提琴等多種樂器課程，從基礎技巧到進階演奏，助你輕鬆掌握！
            </p>
            <ul className="flex flex-col gap-4 my-8">
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">鋼琴基礎入門班</h5>
                <p className="text-gray-2">10堂課讓你彈奏出完整旋律</p>
              </li>
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">爵士鋼琴 Improvisation 班</h5>
                <p className="text-gray-2">提升你的和弦進階技巧</p>
              </li>
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">流行吉他速成班</h5>
                <p className="text-gray-2">只需幾週，學會熱門歌曲</p>
              </li>
            </ul>
            <Link href="/product/1" className="rounded-full px-8 py-4 bg-gray-4 text-white">
              探索課程
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg d-flex flex-col gap-4 text-center border-4 border-gray-4">
            <h3 className="text-h3 text-gray-4 mb-2">音樂理論</h3>
            <p className="text-gray-2">理解音樂，演奏更出色</p>
            <p className="text-gray-3 my-4">
              學習五線譜、和聲、節奏分析，不論是樂器演奏還是作曲，都需要扎實的音樂理論來提升你的音樂表現力！
            </p>
            <ul className="flex flex-col gap-4 my-8">
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">五線譜與樂理基礎</h5>
                <p className="text-gray-2">輕鬆掌握音符與拍號</p>
              </li>
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">視唱練耳與節奏訓練</h5>
                <p className="text-gray-2">讓你的音感更精準</p>
              </li>
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">和聲學進階應用</h5>
                <p className="text-gray-2">深入學習和弦進行與編曲技巧</p>
              </li>
            </ul>
            <Link href="/product/2" className="rounded-full px-8 py-4 bg-gray-4 text-white">
              探索課程
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg d-flex flex-col gap-4 text-center border-4 border-gray-4">
            <h3 className="text-h3 text-gray-4 mb-2">音樂創作</h3>
            <p className="text-gray-2">創造屬於你的音樂作品</p>
            <p className="text-gray-3 my-4">
              夢想成為音樂創作者？從作曲、編曲、混音到電子音樂製作，完整的音樂製作課程，讓靈感變成動人的旋律！
            </p>
            <ul className="flex flex-col gap-4 my-8">
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">流行歌曲創作班</h5>
                <p className="text-gray-2">創作屬於你的音樂</p>
              </li>
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">電子音樂製作入門</h5>
                <p className="text-gray-2">掌握最新音樂製作技術</p>
              </li>
              <li>
                <h5 className="text-h5 text-gray-4 mb-2">人聲錄製與混音技巧</h5>
                <p className="text-gray-2">打造專業錄音品質</p>
              </li>
            </ul>
            <Link href="/product/3" className="rounded-full px-8 py-4 bg-gray-4 text-white">
              探索課程
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
