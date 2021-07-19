import SaveAlert from "@avrc/save-alert";
import React from 'react';
export default {
    title: 'Save Alert',
}


export const Example = () => {
        const props = {
          defaultViewData: { test: "default" },
          viewData: { test: "data" },
          isPersonalPage: true,
        };
      
        return <SaveAlert {...props} />;

}