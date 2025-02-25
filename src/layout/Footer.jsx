import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiTwotoneMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-5 bg-gray-100 text-sm text-gray-600 mt-auto">
      <p className="text-center font-semibold">©2025 AeriGeri Labs</p>

      <p className="mt-2">
        <Link to="/" className="text-blue-500 hover:underline">
          이용약관
        </Link>{" "}
        |{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          개인정보 처리방침
        </Link>
      </p>

      <p className="mt-2 text-center">
        우리의 콘텐츠는 다양한 언어로 제공되고 싶으며, 일부는 AI 번역을
        활용하기까지는 어려움을 겪고 있습니다.
        <br />
        최대한 정확성을 유지하기 위해 노력하지만, 공식적인 기준은 박애리 기준입니다.
      </p>

      <div className="flex space-x-4 mt-3 text-2xl">
        <AiFillInstagram className="text-gray-700 hover:text-pink-500 cursor-pointer" />
        <AiFillFacebook className="text-gray-700 hover:text-blue-600 cursor-pointer" />
        <AiFillTwitterCircle className="text-gray-700 hover:text-sky-500 cursor-pointer" />
        <AiTwotoneMail className="text-gray-700 hover:text-red-500 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
