import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/message",
    name: "message",
    title: () => "Message",
    subTitle: (key: string) => <span key={key}>Colored <strong>message</strong> blocks, to emphasize part of your page</span>,
    icon: {
        name: "window-maximize",
        iconClassName: pageStyle.hasTextInfo,
    },
    componentPath: "components/message"
};

export default components;
