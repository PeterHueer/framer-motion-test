import { Card } from './Card.tsx';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="grid place-items-center h-screen pt-20">
      <div className="w-full max-w-screen-xl text-white">
        <motion.div
          className="grid grid-cols-3 gap-5"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
        >
          {Array.from(Array(12).keys()).map(id => (
            <Card
              key={id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
