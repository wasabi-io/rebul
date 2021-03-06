import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/card",
    name: "card",
    title: () => "Card",
    subTitle: (key: string) => <span key={key}>An all-around flexible and composable component</span>,
    icon: {
        name: "id-card",
        iconClassName: pageStyle.hasTextSuccess,
    },
    componentPath: "components/card"
};

export default components;
