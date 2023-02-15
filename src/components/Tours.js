import { toursSections } from '../data'
import Title from './Title'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursSections.map(
          ({
            id,
            tours_image,
            date,
            title,
            lorem,
            country,
            duration,
            price,
          }) => {
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={tours_image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{lorem}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{' '}
                      {country}
                    </p>
                    <p>{duration}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            )
          }
        )}
      </div>
    </section>
  )
}
export default Tours
