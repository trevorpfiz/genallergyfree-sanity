const arr1 = [
  {
    posts: [
      {
        slug: 'test-post',
        sections: [
          {
            slug: 'section',
            courses: [
              {
                slug: 'course',
              },
              {
                slug: 'course-two',
              },
            ],
          },
        ],
      },
    ],
  },
];

const flattened = arr1.flatMap((author) =>
  author.posts.flatMap((post) =>
    post.sections.flatMap((section) =>
      section.courses.flatMap((course) => [`/learn/${course.slug}/${section.slug}/${post.slug}`])
    )
  )
);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]
