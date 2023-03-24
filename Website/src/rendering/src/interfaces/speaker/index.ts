export type Speakers =  {
  data: {
    item: {
      children: {
        results: [
          {
            id:string,
            name:string,
            displayName: string,
            description:{value:string},
            picture: {
              jsonValue: {
                value: {
                  thumbnailsrc: string;
                  src: string;
                  alt: string;
                  height: string;
                  width: string;
                };
              };
            };
          }
        ];
      };
    };
  };
};