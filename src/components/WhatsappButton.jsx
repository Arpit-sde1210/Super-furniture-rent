import { motion } from 'framer-motion';

import { FaWhatsapp } from 'react-icons/fa';

import '../styles/whatsapp.css';

export default function WhatsAppButton() {

  return (

    <motion.a

      href="https://wa.me/919876543210"

      target="_blank"

      rel="noopener noreferrer"

      className="whatsapp-btn"

      initial={{
        opacity: 0,
        scale: 0.8
      }}

      animate={{
        opacity: 1,
        scale: 1
      }}

      transition={{
        duration: 0.5
      }}

      whileHover={{
        scale: 1.08
      }}

      whileTap={{
        scale: 0.95
      }}
    >

      {/* GLOW */}

      <div className="whatsapp-glow"></div>

      {/* BUTTON */}

      <div className="whatsapp-inner">

        <FaWhatsapp />

      </div>

      {/* TOOLTIP */}

      <div className="whatsapp-tooltip">

        Chat With Us

      </div>

    </motion.a>
  );
}