import Image from 'next/image';
import seedling from '../../../public/seedling.png'
import planting from '../../../public/planting.jpg'
import '../home/review.css'
export default function ReviewSection() {
  return (
    <section className="review-section">
      <div className="left-content">
        <div className="avatars">
          <Image src={seedling} className='image' alt="Client avatars" width={60} height={60} />
        </div>
        <h2>100K+ Client With <br/> Positive Reviews</h2>
      </div>
      
      <div className="center-content">
        <div className="badge">
          <span>Vegetables</span>
          <span>Agro</span>
          <span>Organic</span>
          <span>Farming</span>
        </div>
      </div>
      
      <div className="right-content">
        <div className="video-thumbnail">
          <Image src={planting} className='image' alt="Video preview" width={250} height={150} />
        </div>
        <h2>Healthy Life With Fresh Products</h2>
      </div>
    </section>
  );
}
