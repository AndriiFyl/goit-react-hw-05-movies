import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={css.Wrapper_Reviews}>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li className={css.Review_Description} key={review.author}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <span className={css.Notification_Reviews}>Not any reviews...</span>
        )}
      </ul>
    </div>
  );
};
