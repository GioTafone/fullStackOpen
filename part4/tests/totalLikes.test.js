const totalLikes = require("../utils/list_helper").totalLikes;

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  const listWithManyBlogs = [
    {
      _id: "5a422aa71b54a676234d17f9",
      title: "The C Programming Language",
      author: "Brian Kernighan & Dennis Ritchie",
      url: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628",
      likes: 10,
      __v: 0,
    },

    {
      _id: "5a422aa71b54a676234d17fa",
      title: "The Art of Computer Programming",
      author: "Donald E. Knuth",
      url: "https://www.amazon.com/Art-Computer-Programming-Volumes-Boxed/dp/0321751043",
      likes: 15,
      __v: 0,
    },

    {
      _id: "5a422aa71b54a676234d17fb",
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      url: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612",
      likes: 20,
      __v: 0,
    },
  ];

  test("of empty list is zero", () => {
    expect(totalLikes([])).toBe(0);
  });

  test("when list has only one blog, equals the likes of that", () => {
    const result = totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test("of a bigger list is calculated right", () => {
    const result = totalLikes(listWithManyBlogs);
    expect(result).toBe(45);
  });
});
