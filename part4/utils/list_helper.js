const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (accOfLikes, blog) => {
    return accOfLikes + blog.likes;
  };
  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  let mostLikedBlog = -1;
  let favoriteBlog = null;

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > mostLikedBlog) {
      mostLikedBlog = blogs[i].likes;
      favoriteBlog = blogs[i];
    }
  }

  return {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
