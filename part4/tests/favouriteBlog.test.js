const favoriteBlog = require("../utils/list_helper").favoriteBlog;

describe("favoriteBlog", () => {
  test("when list is empty, returns null", () => {
    expect(favoriteBlog([])).toBe(null);
  });

  test("when list has only one blog, returns that blog", () => {
    const blogs = [
      {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12,
      },
    ];

    expect(favoriteBlog(blogs)).toEqual({
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    });
  });

  test("when list has many blogs, returns the one with most likes", () => {
    const blogs = [
      {
        title: "The C Programming Language",
        author: "Brian Kernighan & Dennis Ritchie",
        likes: 10,
      },
      {
        title: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        likes: 15,
      },
      {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        likes: 20,
      },
    ];

    expect(favoriteBlog(blogs)).toEqual({
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      likes: 20,
    });
  });

  test("when list has many blogs with equal likes, returns one of them", () => {
    const blogs = [
      {
        title: "The C Programming Language",
        author: "Brian Kernighan & Dennis Ritchie",
        likes: 10,
      },
      {
        title: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        likes: 15,
      },
      {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        likes: 15,
      },
    ];

    const favorite = favoriteBlog(blogs);
    expect(favorite).toEqual({
      title: "The Art of Computer Programming",
      author: "Donald E. Knuth",
      likes: 15,
    });
  });
});
