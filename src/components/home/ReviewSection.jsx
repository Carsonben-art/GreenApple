import Image from 'next/image';
import seedling from '../../../public/seedling.png'
import planting from '../../../public/planting.jpg'
import '../home/review.css'
export default function ReviewSection() {
  return (
    <section className="review-section">
      <div className="left-content">
        <div className="avatars">
          <Image src={seedling} className='image' alt="Client avatars" width={150} height={150} />
        </div>
        <h2>40K+ Trees Planted <br/> Since 2023</h2>
      </div>
      
      <div className="center-content">
        <Image src="/icon.png" className="icon" alt='icon' width={200} height={200} />
      </div>
      
      <div className="right-content">
        <div className="video-thumbnail">
          <Image src={planting} className='image' alt="Video preview" width={250} height={150} />
        </div>
        <h2>Healthy Life With clean Environment</h2>
      </div>
    </section>
  );
}
