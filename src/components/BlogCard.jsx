import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import placeholderImg from '../assets/404.jpg'

const BlogCard = ({ blog }) => {
  const { cover_image, title, description, published_at } = blog;

  return (
    <div className="flex relative">
      <Link className="max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline ">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeholderImg}
        />
        <div className="py-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {/* {title.substring(0, 25)}.. */}
            {title}
          </h3>
          <span className="text-xs ">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
        <div></div>
      </Link>
      {/* {deletable && (
        <div className="bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5">
        <MdDeleteForever
          size={20}
          className="text-secondary group-hover:text-primary"
        />
      </div>
      )} */}
    </div>
  );
};

export default BlogCard;
