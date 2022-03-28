import { IApiRes } from '../../interfaces';

type TEl = {
   site_slug: string;
   link_url: string;
   link_target: string;
   image_url: string;
   external_type: string;
};

export type TGusPcomRes = Omit<IApiRes, 'json'> & {
   json: {
      buttons: TEl[];
      promotions: TEl[];
      localized: {
         external_link_title: string;
         external_link_content: string;
         continue: string;
         logout: string;
         pokemon_center_link_content: string;
         cancel: string;
         login: string;
         pokemon_center_link_title: string;
         create_account: string;
      };
      user_info: {
         logged_in: boolean;
         modal_img: string;
         enabled: boolean;
      };
   };
};
