const addItemFunc = (addData) => {
  const {id,name,avatar,job,about} = addData || {};
    let simpsonsList =
    [
      {
        id: 3,
        name: "Bart Simpson",
        avatar: "avatar",
        job: "Student",
        about: "about"
      },
    ];
    simpsonsList.push({
      id,
      name,
      avatar,
      job,
      about,
    });
    return simpsonsList;
};
it('add item data error', async () => {
    expect(addItemFunc({
      id: 5,
      name: "Maggie Simpson",
      avatar: "avatar",
      job: "Baby",
      about: "about"
    })).toMatchObject(
      [
        {
          id: 3,
          name: "Bart Simpson",
          avatar: "avatar",
          job: "Student",
          about: "about"
        },
        {
          id: 5,
          name: "Maggie Simpson",
          avatar: "avatar",
          job: "Baby",
          about: "about"
        }
    ]);
});
