import "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl p-4 border border-slate-200 shadow-sm duration-200 hover:shadow-md hover:-translate-y-0.5">
        <div className="w-full mb-4 overflow-hidden rounded-lg">
          {featuredImage && (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-40 object-cover"
            />
          )}
        </div>
        <h2 className="text-lg font-semibold text-slate-800 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
