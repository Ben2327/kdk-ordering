const INITIAL_STATE = {
    sections: [
        {
          title: "maincourse",
          imageUrl:
            "https://i.ndtvimg.com/i/2016-10/chicken-korma_650x400_51475662188.jpg",
          id: 1,
          linkUrl: 'order/maincourse'
        },
        {
          title: "starters",
          imageUrl:
            "https://i.ytimg.com/vi/EpR4Ie0DR3I/maxresdefault.jpg",
          id: 2,
          linkUrl: 'order/starters'
        },
        {
          title: "beaverages",
          imageUrl:
            "https://www.madhurasrecipe.com/media/Egg-Kheema-1.jpg",
          id: 3,
          linkUrl: "order/beaverages"
        },
        {
          title: "desi breads",
          imageUrl:
            "https://www.bonappetour.com/assets/images/asset_pictures/1438828773-5599539.jpeg",
          size: "large",
          id: 4,
          linkUrl: "order/desibreads"
        },
        {
          title: "chinese Tastes",
          imageUrl:
            "https://induspizza.com/wp-content/uploads/2017/11/chicken_popcorn.jpg",
          size: "large",
          id: 5,
          linkUrl: "order/chinesetaste"
        },
      ],
    };

    const directoryReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };
      export default directoryReducer;      