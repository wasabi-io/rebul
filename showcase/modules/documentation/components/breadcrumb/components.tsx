import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/breadcrumb",
    name: "breadcrumb",
    title: () => "BreadCrumb",
    subTitle: (key: string) => <span key={key}>A simple <strong>breadcrumb</strong> component to improve your navigation experience</span>,
    icon: {
        name: "ellipsis-h",
        iconClassName: pageStyle.hasTextStar
    },
    componentPath: "components/breadcrumb"
};

export default components;
