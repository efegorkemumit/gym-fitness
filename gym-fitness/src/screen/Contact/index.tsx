import React from 'react';
import { motion } from 'framer-motion';
import Htext from '../../shared/Htext';
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png';

type Props = {};

const Contact = (props: Props) => {
  const formclassname =
    'mb-5 bg-primary-300 px-5 py-3 w-full rounded-lg placeholder-white';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="contactus"
      className="mx-auto w-5/6 pt-24 pb-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <div className="md:w-3/5">
          <Htext>JOIN NOW TO GET IN SHAPE</Htext>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            saepe eius alias rerum voluptatibus consequatur laudantium libero
            accusantium quisquam non, nostrum asperiores veritatis quis. Odit
            magni corporis cupiditate error sit!
          </p>
        </div>

        <motion.div className="mt-10 flex gap-8" variants={containerVariants}>
          <motion.div
            className="mt-10 flex-1/2"
            variants={formVariants}
          >
            <form>
              <motion.input
                className={formclassname}
                placeholder="Name"
                required
              ></motion.input>

              <motion.input
                className={formclassname}
                placeholder="Email"
                required
              ></motion.input>

              <motion.textarea
                className={formclassname}
                rows={8}
              ></motion.textarea>

              <motion.button
                type="submit"
                className="mt-5 rounded-lg font-bold text-xl hover:text-white hover:bg-secondary-700 bg-secondary-400 px-20 py-3 transition duration-200 hover:duration-500"
                whileHover={{ scale: 1.1 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="flex-1/2 relative md:ml-48"
            variants={imageVariants}
          >
            <motion.img
              src={ContactUsPageGraphic}
              className="w-full rounded-xl"
            ></motion.img>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
