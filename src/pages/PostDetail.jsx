import React, { useContext } from "react";
import { PostContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const PostDetail = () => {
  const { posts } = useContext(PostContext);
  const { id } = useParams();

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    <div> Post Não Encontrado</div>;
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div key={post.id} className="mb-5 rounded-sm shadow-sm">
          <div>
            <p className="p-1 text-lg font-medium text-blue-500">
              {post.title}
            </p>
            <p className="p-1 text-sm font-thin">{post.body}</p>
          </div>
          <div className="m-1">{post.comments.length} comments</div>
        </div>

        <div className="flex flex-row mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
              />
            </svg>
          </div>
          <div>
            {post.comments.map((comment) => (
              <div key={comment.id} className="mt-2 shadow-sm rounded-md mb-2">
                <div className="p-1 rounded-sm text-blue-400">
                  {comment.email}
                </div>
                <div>
                  <p className="p-1 font-mono text-sm font-thin">
                    {comment.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
