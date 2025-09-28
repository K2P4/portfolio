import { FaFacebookF, FaTelegram,FaLinkedinIn } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export const Social = ({isFooter = false}) => {
  return (
    <div className={`flex items-center justify-center ${isFooter ? 'lg:justify-center ' : "lg:justify-normal "} gap-5 mt-6 `}>
      <a href="https://www.facebook.com/profile.php?id=100077023871140" target="_blank">
        <FaFacebookF className="btn-outline-wth-animate   h-10 w-10 lg:h-12 lg:w-12 p-2 " />
      </a>
      <a href="https://www.instagram.com/vik83124" target="_blank">
        <AiFillInstagram className="btn-outline-wth-animate   h-10 w-10 lg:h-12 lg:w-12 p-2 " />
      </a>
      <a href="https://t.me/KP_Vv" target="_blank">
        <FaTelegram className="btn-outline-wth-animate   h-10 w-10 lg:h-12 lg:w-12 p-2 " />
      </a>
      <a href="http://linkedin.com/in/phyothura21" target="_blank">
        <FaLinkedinIn className="btn-outline-wth-animate   h-10 w-10 lg:h-12 lg:w-12 p-2 " />
      </a>
      <a href="https://github.com/K2P4" target="_blank">
        <FaGithub className="btn-outline-wth-animate   h-10 w-10 lg:h-12 lg:w-12 p-2 " />
      </a>
    </div>
  );
};
