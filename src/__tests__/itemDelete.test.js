const itemDeleteFunc = (removedID) => {
    let simpsonsList =
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
      },
    ];

    let newSimpsonsList = [];
     simpsonsList.map((item)=>{
      const {id, name, avatar, job, about} = item;
      if (id!=removedID) {
        newSimpsonsList.push({
          id,
          name,
          avatar,
          job,
          about
        })
      }
    });
    return newSimpsonsList;
};
it('remove item data error', async () => {
    expect(itemDeleteFunc(3)).toMatchObject(
      [
        {
          id: 5,
          name: "Maggie Simpson",
          avatar: "avatar",
          job: "Baby",
          about: "about"
        }
    ])
});
