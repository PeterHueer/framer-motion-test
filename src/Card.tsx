import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import { MotionProps, motion } from 'framer-motion';
import React from 'react';

export function Card(
  props: React.HTMLAttributes<HTMLDivElement> & MotionProps,
) {
  return (
    <motion.div className="card w-full bg-base-100 shadow-xl" {...props}>
      <figure>
        <img
          src={`https://picsum.photos/500/200?cache=${uuid()}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{faker.commerce.productName()}</h2>
        <p>{faker.commerce.productDescription()}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
}
