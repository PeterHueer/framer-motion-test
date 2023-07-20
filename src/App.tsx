import { Card } from './Card.tsx';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="grid place-items-center h-screen p-5">
      <motion.a
        href="https://github.com/PeterHueer/framer-motion-test"
        className="uppercase hover:text-white rounded bg-secondary p-1 pr-2 pl-2 text-white m-5"
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        target="_blank"
      >
        Github link
      </motion.a>
      <div className="w-full max-w-screen-xl text-white">
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
        >
          {Array.from(Array(9).keys()).map(id => (
            <Card
              key={id}
              variants={{
                hidden: { opacity: 0.001, y: 100, scale: 0.5 },
                show: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    y: {
                      duration: 0.5,
                    },
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
