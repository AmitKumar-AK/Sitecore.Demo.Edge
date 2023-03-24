export type ListResults =  {
  data: {
    item: {
      children: {
        results: [
          {
            id:string,
            name:string,
            displayName: string,
            description:{value:string},
            url:{path:string},
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